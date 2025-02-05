module.exports = {
  routes: [
    {
      method: "GET",
      path: "/formulario-registro-populate",
      handler: "formulario-registro-populate.find",
      config: {
        auth: false,
      },
    },
  ],
};