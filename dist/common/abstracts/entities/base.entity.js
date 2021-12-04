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
class EmptyEntity {
}
exports.EmptyEntity = EmptyEntity;
function EntityBase(Base) {
    class AbstractBase extends Base {
        static _OPENAPI_METADATA_FACTORY() {
            return { id: { required: true, type: () => Number } };
        }
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], AbstractBase.prototype, "id", void 0);
    return AbstractBase;
}
exports.EntityBase = EntityBase;
function EntityBaseWithDate(Base) {
    class AbstractBase extends Base {
        static _OPENAPI_METADATA_FACTORY() {
            return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, version: { required: true, type: () => Number }, uuid: { required: true, type: () => String }, deletedAt: { required: true, type: () => Date } };
        }
    }
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            nullable: true,
            default: () => 'CURRENT_TIMESTAMP(6)',
        }),
        __metadata("design:type", Date)
    ], AbstractBase.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP(6)',
            onUpdate: 'CURRENT_TIMESTAMP(6)',
        }),
        __metadata("design:type", Date)
    ], AbstractBase.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.VersionColumn({
            default: 0,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], AbstractBase.prototype, "version", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], AbstractBase.prototype, "uuid", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
        __metadata("design:type", Date)
    ], AbstractBase.prototype, "deletedAt", void 0);
    return AbstractBase;
}
exports.EntityBaseWithDate = EntityBaseWithDate;
//# sourceMappingURL=base.entity.js.map