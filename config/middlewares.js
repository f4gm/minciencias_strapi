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
            "https://tiles.openfreemap.org"
          ],
          "script-src": ["'self'", "https://unpkg.com"],
          "worker-src": ["'self'", "blob:"]
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
