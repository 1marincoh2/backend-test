"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const Schema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'pre-production', 'production').default('development'),
    PORT: Joi.number().default(3000),
    JWT_SECRET: Joi.string(),
    JWT_EXPIRATION: Joi.string(),
    DATABASE_PORT: Joi.number(),
});
exports.default = Schema;
//# sourceMappingURL=config.schema.js.map