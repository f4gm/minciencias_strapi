module.exports = {
  routes: [
    {
      method: "POST",
      path: "/solicitudes/bulk-create",
      handler: "solicitud.bulkCreate",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
