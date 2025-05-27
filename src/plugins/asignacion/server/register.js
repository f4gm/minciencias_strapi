"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "asignacion",
    plugin: "asignacion",
    type: "string",
  });
  strapi.admin.services.permission.actionProvider.register({
    section: "plugins",
    displayName: "Acceder al plugin de asignación",
    uid: "read",
    pluginName: "asignacion",
  });
};
