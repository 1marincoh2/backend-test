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
const base_entity_1 = require("./base.entity");
class ProtectedResource extends base_entity_1.Base {
    static _OPENAPI_METADATA_FACTORY() {
        return { isRemoved: { required: true, type: () => Boolean }, removedAt: { required: true, type: () => Date } };
    }
}
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        default: false,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], ProtectedResource.prototype, "isRemoved", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], ProtectedResource.prototype, "removedAt", void 0);
exports.ProtectedResource = ProtectedResource;
//# sourceMappingURL=protected-resource.entity.js.map