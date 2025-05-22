"use strict";

/**
 * solicitud controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
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

const baunit = {
  api: "api::col-baunitcomointeresado.col-baunitcomointeresado",
  fields: {
    interested: "interesado_cr_interesado",
    property: "unidad",
    recognizer: "reconocedor",
  },
};

const pack = {
  api: "api::paquete.paquete",
  fields: {
    interested: "cr_interesado",
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

    if (!verifyIdentifier(interested) && !verifyIdentifier(property)) {
      return ctx.badRequest(
        "'cr_interado' or 'cr_predio' are not defined or not is a natural number."
      );
    }

    const recognizer = await strapi.db.query(baunit.api).findOne({
      where: {
        [baunit.fields.interested]: interested,
        [baunit.fields.property]: property,
      },
      populate: true,
    });

    const recognizerId = recognizer[baunit.fields.recognizer]["id"];

    const createdPack = await strapi.entityService.create(pack.api, {
      data: {
        [pack.fields.interested]: interested,
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
