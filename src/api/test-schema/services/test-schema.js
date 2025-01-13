'use strict';

/**
 * test-schema service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-schema.test-schema');
