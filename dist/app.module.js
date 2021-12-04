"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("./core");
const app_controller_1 = require("./app.controller");
const preference_module_1 = require("./modules/hot/preference/preference.module");
const schedule_1 = require("@nestjs/schedule");
const sucursal_module_1 = require("./modules/terminal/payment/sucursal.module");
const classification_module_1 = require("./modules/classifications/classification.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            core_1.CoreModule,
            schedule_1.ScheduleModule.forRoot(),
            preference_module_1.PreferenceModule,
            sucursal_module_1.SucursalModule,
            classification_module_1.ClassificationModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map