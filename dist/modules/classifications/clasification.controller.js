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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const sucursal_schema_1 = require("./schema/sucursal.schema");
const nestjs_mongoose_crud_1 = require("nestjs-mongoose-crud");
const sucursal_service_1 = require("./sucursal.service");
let SucursalController = class SucursalController {
    constructor(service) {
        this.service = service;
        this.crudOptions = {};
        this.model = service.model;
    }
};
SucursalController = __decorate([
    nestjs_mongoose_crud_1.Crud({
        model: sucursal_schema_1.Sucursal
    }),
    common_1.Controller('sucursal'),
    __metadata("design:paramtypes", [typeof (_a = typeof sucursal_service_1.SucursalService !== "undefined" && sucursal_service_1.SucursalService) === "function" ? _a : Object])
], SucursalController);
exports.SucursalController = SucursalController;
//# sourceMappingURL=clasification.controller.js.map