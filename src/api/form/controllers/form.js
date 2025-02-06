'use strict';

/**
 * form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::form.form', ({ strapi }) => ({
  async find(ctx) {
    let { data, meta } = await super.find(ctx);
    data = await middleware(data);
    return { data, meta };
  }
}));

const middleware = async (data) => {
  const response = await Promise.all(
    data.map(async form => {
      if (!("inputs" in form.attributes)) {
        console.log("Not has inputs")
        return form;
      }
  
      const targetInputs = ["checkbox", "radio", "select"];
  
      const new_inputs = await Promise.all(
        form.attributes.inputs.map(async input => {
  
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
      );
  
      form.attributes.inputs = new_inputs;
  
      return form;
    })
  );

  return response;
}
