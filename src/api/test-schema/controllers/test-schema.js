'use strict';

/**
 * test-schema controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-schema.test-schema');
