"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const mailer_1 = require("@nestjs-modules/mailer");
function mailerModuleOptions() {
    return {
        transport: {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        },
        defaults: {
            from: `"${process.env.EMAIL_DEFAULT_FROM_NAME}" <${process.env.EMAIL_DEFAULT_FROM_EMAIL}>`,
        },
        template: {
            dir: process.cwd() + '/template/',
            adapter: new mailer_1.HandlebarsAdapter(),
            options: {
                strict: true,
            },
        },
    };
}
exports.default = config_1.registerAs('mailer', () => ({
    config: mailerModuleOptions(),
}));
//# sourceMappingURL=mailer.config.js.map