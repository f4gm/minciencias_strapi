module.exports = [
  'strapi::logger',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'", "data:", "blob:",
            "https://tile.openstreetmap.org",
            "https://a.tile.openstreetmap.org",
            "https://b.tile.openstreetmap.org",
            "https://c.tile.openstreetmap.org",
          ],
          "script-src": ["'self'", "https://unpkg.com"],
        },
      },
    },
  },
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
