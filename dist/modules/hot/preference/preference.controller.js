"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const preference_schema_1 = require("./schema/preference.schema");
const nestjs_mongoose_crud_1 = require("nestjs-mongoose-crud");
const preference_service_1 = require("./preference.service");
let PreferenceController = class PreferenceController {
    constructor(service) {
        this.service = service;
        this.crudOptions = {};
        this.model = service.model;
    }
};
PreferenceController = __decorate([
    nestjs_mongoose_crud_1.Crud({
        model: preference_schema_1.Preference
    }),
    common_1.Controller('preference'),
    __metadata("design:paramtypes", [preference_service_1.PreferenceService])
], PreferenceController);
exports.PreferenceController = PreferenceController;
//# sourceMappingURL=preference.controller.js.map