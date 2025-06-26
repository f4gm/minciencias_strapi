module.exports = {
  "land": {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/get-land",
        handler: "getLand.find",
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
  "admin-user": {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/get-admin",
        handler: "getAdmin.find",
        config: {
          policies: [],
          auth: false,
        },
      },
      {
        method: "GET",
        path: "/get-role",
        handler: "getRole.find",
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
};
