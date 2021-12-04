"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const server_config_1 = require("../../config/server.config");
const database_config_1 = require("../../config/database.config");
const config_schema_1 = require("../../config/config.schema");
const mailer_config_1 = require("../../config/mailer.config");
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                ignoreEnvFile: process.env.NODE_ENV === 'production' ? true : false,
                envFilePath: `environment/.env.${process.env.NODE_ENV || 'development'}`,
                load: [server_config_1.default, database_config_1.default, mailer_config_1.default],
                validationSchema: config_schema_1.default,
                isGlobal: true,
            }),
        ],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=config.module.js.map