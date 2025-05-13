module.exports = {
  async migrationCreate(strapi, ctx, apiName) {
    const { legacy_id, migration, ...rest } = ctx.request.body.data;

    const entry = await strapi.entityService.findOne(apiName, legacy_id, {});

    if (entry) {
      return ctx.badRequest(`The element with id ${legacy_id} already exists.`);
    } else {
      const inserted = await strapi.db.query(apiName).create({
        data: {
          id: legacy_id,
          ...rest,
        },
      });
      return inserted;
    }
  },
};
