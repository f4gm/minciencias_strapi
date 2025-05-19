'use strict';

/**
 * solicitud controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::solicitud.solicitud', ({ strapi }) => ({
  async bulkCreate(ctx) {
    const entries = ctx.request.body.data;

    if (!Array.isArray(entries)) {
      return ctx.badRequest("The body must be an array.");
    }

    const results = await Promise.all(
      entries.map(entry =>
        strapi.entityService.create('api::solicitud.solicitud', { data: entry })
      )
    );

    ctx.send({ data: results });
  }
}));
