({strapi}) => ({
  async create(ctx) {
    const apiName = "api::apiName.apiName";

    const { legacy_id, migration, ...rest } = ctx.request.body.data;
    if (Number.isInteger(legacy_id) && legacy_id > 0 && migration) {
      const entry = await strapi.entityService.findOne(apiName, legacy_id, {});

      if (entry) {
        return ctx.badRequest(`The element with id ${legacy_id} already exists.`)
      } else {
        const inserted = await strapi.db.query(apiName).create({
          data: {
            id: legacy_id,
            ...rest
          }
        })
        return inserted;
      }
    } else {
      const response = await super.create(ctx);
      return response;
    }
  }
})