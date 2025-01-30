module.exports = {
  routes: [
    {
      method: "GET",
      path: "/formulario-populate",
      handler: "formulario-populate.find",
      config: {
        auth: false,
      },
    },
  ],
};