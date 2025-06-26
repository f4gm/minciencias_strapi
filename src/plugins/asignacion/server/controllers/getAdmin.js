"use strict";

const { verifyIdentifier, getCurrentTime } = require("../utils");

module.exports = ({ strapi }) => ({
  async find(ctx) {
    let { role } = ctx.query;

    try {
      role = parseInt(role);
    } catch(error) {
      console.log(
        `[${getCurrentTime()}] Error asignacion plugin. Trying to parseInt role: ${role}`
      )
      return ctx.internalServerError();
    }

    if (!verifyIdentifier(role)) {
      return ctx.badRequest(
        "'role' is not defined or not is a natural number."
      );
    }

    const users = await strapi.entityService.findMany("admin::user", {
      fields: ["firstname", "lastname", "email"],
      filters: {
        roles: {
          $eq: [role],
        },
      },
      populate: {
        roles: {
          fields: ["name", "description"],
        },
      },
    });

    ctx.status = 200;
    ctx.body = {
      data: users,
    };

    return ctx;
  },
});
