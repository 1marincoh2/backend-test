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
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
function BaseEntityMetadata(Base) {
    class AbstractBase extends Base {
        static _OPENAPI_METADATA_FACTORY() {
            return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, version: { required: true, type: () => Number }, uuid: { required: true, type: () => String }, deletedAt: { required: true, type: () => Date }, key: { required: true, type: () => String }, value: { required: false, type: () => String } };
        }
    }
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Index(),
        typeorm_1.Column({ type: 'varchar', length: 255, nullable: true }),
        __metadata("design:type", String)
    ], AbstractBase.prototype, "key", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.Column({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], AbstractBase.prototype, "value", void 0);
    return AbstractBase;
}
exports.BaseEntityMetadata = BaseEntityMetadata;
//# sourceMappingURL=metadata.base.entity.js.map