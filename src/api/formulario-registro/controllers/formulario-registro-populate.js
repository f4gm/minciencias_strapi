'use strict';

/**
 * formulario controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::formulario-registro.formulario-registro', ({ strapi }) => ({
  async find(ctx) {

    const { data, meta } = await super.find(ctx);

    // Skip if the query not contains inputs
    if (!("inputs" in data.attributes)) {
      return { data, meta }
    }

    const targetInputs = ["checkbox", "radio", "select"];

    const new_inputs = await Promise.all(
      data.attributes.inputs.map(async input => {

        if (targetInputs.includes(input.type)) {

          const collectionName = input.context.data_source;
          const options = await strapi.entityService.findMany(`api::${collectionName}.${collectionName}`, {
            fields: ["id", "nombre_vista", "descripcion_vista"]
          });

          const new_options = options.map(option => ({
            "value": option.id,
            "name": option.nombre_vista,
            "help": option.descripcion_vista
          }));

          input.context.options = new_options;

          return input;
        } else {
          return input;
        }
      })
    )

    data.attributes.inputs = new_inputs;
    return { data, meta }
  }
}));