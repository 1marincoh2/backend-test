"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const classification_controller_1 = require("./classification.controller");
const classification_service_1 = require("./classification.service");
const mongoose_1 = require("@nestjs/mongoose");
const classification_schema_1 = require("./classification/schema/classification.schema");
let ClassificationModule = class ClassificationModule {
};
ClassificationModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: classification_schema_1.Classification.name, schema: classification_schema_1.ClassificationSchema }]),
        ],
        controllers: [classification_controller_1.ClassificationController],
        providers: [classification_service_1.ClassificationService]
    })
], ClassificationModule);
exports.ClassificationModule = ClassificationModule;
//# sourceMappingURL=classification.module.js.map