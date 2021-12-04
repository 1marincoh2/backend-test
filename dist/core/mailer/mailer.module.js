"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const config_constants_1 = require("../../config/config.constants");
let MailerModule = class MailerModule {
};
MailerModule = __decorate([
    common_1.Module({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: (configService) => configService.get(config_constants_1.CONFIG_MAILER_CONFIG),
                inject: [config_1.ConfigService],
            }),
        ],
    })
], MailerModule);
exports.MailerModule = MailerModule;
//# sourceMappingURL=mailer.module.js.map