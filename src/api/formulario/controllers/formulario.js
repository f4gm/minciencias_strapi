"use strict";

/**
 * formulario controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const slug = "identificador";
const inputsName = "entradas";
const tableSource = "tableSource";

module.exports = createCoreController(
  "api::formulario.formulario",
  ({ strapi }) => ({
    async find(ctx) {
      let { data, meta } = await super.find(ctx);
      data = await populateOptions(data);
      return { data, meta };
    },
    // async findOne(ctx) {
    //   const { id } = ctx.params;
    //   const entity = await strapi.db
    //     .query("api::formulario.formulario")
    //     .findOne({
    //       where: { [slug]: id },
    //     });
    //   const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    //   return this.transformResponse(sanitizedEntity);
    // },
  })
);

const populateOptions = async (data) => {
  const response = await Promise.all(
    data.map(async (form) => {
      if (!(inputsName in form.attributes)) {
        console.log("Not has inputs");
        return form;
      }

      const targetInputs = ["checkbox", "radio", "select"];

      const new_inputs = await Promise.all(
        form.attributes[inputsName].map(async (input) => {
          if (targetInputs.includes(input.type)) {
            const collectionName = input.context[tableSource];
            const options = await strapi.entityService.findMany(
              `api::${collectionName}.${collectionName}`,
              {
                fields: ["id", "nombre_vista", "descripcion_vista"],
              }
            );

            const new_options = options.map((option) => ({
              value: option.id,
              name: option.nombre_vista,
              help: option.descripcion_vista,
            }));

            input.context.options = new_options;

            return input;
          } else {
            return input;
          }
        })
      );

      form.attributes[inputsName] = new_inputs;

      return form;
    })
  );

  return response;
};
