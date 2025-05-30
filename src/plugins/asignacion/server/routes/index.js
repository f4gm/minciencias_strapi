module.exports = {
  "get-lands": {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/get-lands",
        handler: "pluginController.index",
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
};
