'use strict';

/**
 * test-schema router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-schema.test-schema');
