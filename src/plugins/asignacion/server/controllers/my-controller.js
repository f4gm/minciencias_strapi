'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('asignacion')
      .service('myService')
      .getWelcomeMessage();
  },
});
