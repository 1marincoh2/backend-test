"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
function jwtModuleOptions() {
    return {
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    };
}
function passportModuleOptions() {
    return {
        defaultStrategy: 'jwt',
    };
}
exports.default = config_1.registerAs('server', () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    jwt: jwtModuleOptions(),
    passport: passportModuleOptions(),
}));
//# sourceMappingURL=server.config.js.map