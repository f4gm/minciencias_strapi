'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('plugin-test')
      .service('myService')
      .getWelcomeMessage();
  },
});
