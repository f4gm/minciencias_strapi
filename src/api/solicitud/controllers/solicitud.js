"use strict";

/**
 * solicitud controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const api = require("../../../../config/api");
const { GetCurrentTime } = require("../../../../utils/dateUtils")

const request = {
  api: "api::solicitud.solicitud",
  fields: {
    interested: "cr_interesado",
    property: "cr_predio",
    entries: "entries",
    package: "paquete",
    recognizer: "reconocedor",
  },
};

const unit = {
  api: "api::cr-predio.cr-predio",
  fields: {
    recognizer: "reconocedor"
  }
}

const baunit = {
  api: "api::col-baunitcomointeresado.col-baunitcomointeresado",
  fields: {
    interested: "interesado_cr_interesado",
    property: "unidad"
  }
}

const pack = {
  api: "api::paquete.paquete",
  fields: {
    interested: "cr_interesado",
    property: "cr_predio",
    recognizer: "reconocedor",
  },
};

module.exports = createCoreController(request.api, ({ strapi }) => ({
  async bulkCreate(ctx) {
    const {
      [request.fields.interested]: interested,
      [request.fields.property]: property,
      [request.fields.entries]: entries,
    } = ctx.request.body.data;

    // Checking that identifiers are natural numbers
    if (!verifyIdentifier(interested) && !verifyIdentifier(property)) {
      return ctx.badRequest(
        "'cr_interado' or 'cr_predio' are not defined or not is a natural number."
      );
    }

    // Checking that user exist
    const checkingUser = await strapi.entityService.findOne("plugin::users-permissions.user", interested, {
      fields: []
    });
    if (!checkingUser) {
      return ctx.badRequest(
        `The 'cr_interesado' identifier (${interested}) does not exist.`
      )
    }

    // Checking that property exist. Get the recognizer associated with the property
    const checkingProperty = await strapi.entityService.findOne(unit.api, property, {
      fields: [],
      populate: unit.fields.recognizer
    });
    if (!checkingProperty) {
      return ctx.badRequest(
        `The 'cr_predio' identification (${property}) does not exist.`
      );
    }

    // Checking if that property is associated with the interested
    const checkingUserProperty = await strapi.entityService.findMany(baunit.api, {
      filters: {
        $and: [
          {
            [baunit.fields.interested]: interested
          },
          {
            [baunit.fields.property]: property
          }
        ]
      }
    });
    if (!checkingUserProperty || checkingUserProperty.length === 0) {
      return ctx.badRequest(
        `The interested (${interested}) is not the owner of the property (${property}).`
      )
    }
    
    // Checking if the property has associated a recognizer
    if (!checkingProperty[unit.fields.recognizer]) {
      console.log(
        `${GetCurrentTime()} ‼️ The property ${property} has not associated a recognizer.`
      )
      return ctx.internalServerError();
    }

    // Creating the package
    const recognizerId = checkingProperty[unit.fields.recognizer]["id"];
    const createdPack = await strapi.entityService.create(pack.api, {
      data: {
        [pack.fields.interested]: interested,
        [pack.fields.property]: property,
        [pack.fields.recognizer]: recognizerId,
      },
    });

    console.log(
      `${GetCurrentTime()} 🧩 Package ${createdPack["id"]} created by user ${interested} for property ${property}`
    );

    if (!Array.isArray(entries)) {
      return ctx.badRequest("The 'entries' must be an array.");
    }

    const results = await Promise.all(
      entries.map((entry) =>
        strapi.entityService.create(request.api, {
          data: {
            [request.fields.interested]: interested,
            [request.fields.property]: property,
            [request.fields.package]: createdPack["id"],
            ...entry,
          },
        })
      )
    );

    ctx.send({ data: results });
  },
}));

const verifyIdentifier = (identifier) => {
  if (
    typeof identifier !== "undefined" &&
    typeof identifier === "number" &&
    Number.isInteger(identifier) &&
    identifier > 0
  ) {
    return true;
  } else {
    return false;
  }
};
