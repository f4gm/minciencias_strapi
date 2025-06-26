"use strict";

module.exports = ({ strapi }) => ({
  async find(ctx) {
    const roles = await strapi.entityService.findMany("admin::role", {
      fields: ["name", "code", "description"],
    });

    ctx.status = 200;
    ctx.body = {
      data: roles,
    };
    
    return ctx;
  },
});
