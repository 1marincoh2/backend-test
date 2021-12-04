"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const config_module_1 = require("./config/config.module");
const scheduler_module_1 = require("./scheduler/scheduler.module");
const mailer_module_1 = require("./mailer/mailer.module");
const CORE_MODULES = [database_module_1.DatabaseModule, config_module_1.ConfigModule, scheduler_module_1.SchedulerModule, mailer_module_1.MailerModule];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    common_1.Module({
        imports: CORE_MODULES,
        exports: CORE_MODULES,
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map