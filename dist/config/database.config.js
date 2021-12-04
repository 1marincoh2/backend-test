"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.DBNameCnx = 'signati';
function typeormModuleOptions() {
    console.log(__dirname);
    return {
        uri: `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/ihc?authSource=admin`,
        useFindAndModify: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    };
}
exports.default = config_1.registerAs('database', () => ({
    config: typeormModuleOptions(),
}));
//# sourceMappingURL=database.config.js.map