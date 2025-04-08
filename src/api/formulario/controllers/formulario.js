'use strict';

/**
 * formulario controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::formulario.formulario', ({ strapi }) => ({
  async find(ctx) {
    let { data, meta } = await super.find(ctx);
    data = await middleware(data);
    return { data, meta };
  }
}));

const inputsName = "entradas";

const middleware = async (data) => {
  const response = await Promise.all(
    data.map(async form => {
      if (!(inputsName in form.attributes)) {
        console.log("Not has inputs")
        return form;
      }
  
      const targetInputs = ["checkbox", "radio", "select"];
  
      const new_inputs = await Promise.all(
        form.attributes[inputsName].map(async input => {
  
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
  
      form.attributes[inputsName] = new_inputs;
  
      return form;
    })
  );

  return response;
}
