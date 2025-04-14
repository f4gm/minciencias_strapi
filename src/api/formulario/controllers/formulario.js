"use strict";

/**
 * formulario controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const slug = "identificador";

const inputsName = "entradas";
const tableSource = "tableSource";
const targetInputs = ["checkbox", "radio", "select"];
const optionValue = "id";
const optionName = "nombre_vista";
const optionHelp = "descripcion_vista";

module.exports = createCoreController(
  "api::formulario.formulario",
  ({ strapi }) => ({
    async find(ctx) {
      let { data, meta } = await super.find(ctx);
      data = await populateOptionsMany(data);
      return { data, meta };
    },
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::formulario.formulario")
        .findOne({
          where: { [slug]: id },
        });
      ctx.params = {
        ...ctx.params,
        id: entity.id,
      };
      let { data, meta } = await super.findOne(ctx);

      data = await populateOptionsOne(data);
      return { data, meta };
    },
  })
);

const populateOptionsMany = async (data) => {
  const response = await Promise.all(
    data.map(async (form) => {
      return await populateOptionsOne(form);
    })
  );

  return response;
};

const populateOptionsOne = async (form) => {
  if (!(inputsName in form.attributes)) {
    console.log("Not has inputs");
    return form;
  }

  const new_inputs = await Promise.all(
    form.attributes[inputsName].map(async (input) => {
      if (targetInputs.includes(input.type)) {
        const collectionName = input.context[tableSource];
        const options = await strapi.entityService.findMany(
          `api::${collectionName}.${collectionName}`,
          {
            fields: [optionValue, optionName, optionHelp],
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
};
