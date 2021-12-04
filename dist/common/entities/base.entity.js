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
class Base {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, version: { required: true, type: () => Number }, uuid: { required: true, type: () => String } };
    }
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
    }),
    __metadata("design:type", Number)
], Base.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp with time zone',
    }),
    __metadata("design:type", Date)
], Base.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp with time zone',
    }),
    __metadata("design:type", Date)
], Base.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.VersionColumn({
        default: 0,
        nullable: false,
    }),
    __metadata("design:type", Number)
], Base.prototype, "version", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Base.prototype, "uuid", void 0);
exports.Base = Base;
//# sourceMappingURL=base.entity.js.map