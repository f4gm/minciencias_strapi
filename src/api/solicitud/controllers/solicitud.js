"use strict";

/**
 * solicitud controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const apiRequest = "api::solicitud.solicitud";
const apiBAIn = "api::col-baunitcomointeresado.col-baunitcomointeresado";

module.exports = createCoreController(apiRequest, ({ strapi }) => ({
  async bulkCreate(ctx) {
    const { cr_interesado, cr_predio, entries } = ctx.request.body.data;

    if (!verifyIdentifier(cr_interesado) && !verifyIdentifier(cr_predio)) {
      return ctx.badRequest(
        "'cr_interado' or 'cr_predio' are not defined or not is a natural number."
      );
    }

    let recognizer = await strapi.entityService.findMany(apiBAIn, {
      filters: {
        interesado_cr_interesado: cr_interesado,
        unidad: cr_predio,
      },
      populate: "reconocedor"
    });

    recognizer = recognizer[0]["reconocedor"]

    console.log(recognizer);
    // TODO

    if (!Array.isArray(entries)) {
      return ctx.badRequest("The 'entries' must be an array.");
    }

    const results = await Promise.all(
      entries.map((entry) =>
        strapi.entityService.create(apiRequest, {
          data: {
            cr_interesado: cr_interesado,
            cr_predio: cr_predio,
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
