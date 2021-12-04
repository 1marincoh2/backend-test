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
const api_model_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-model-property.decorator");
function PaginationQuery(ResourceCls) {
    class Paginated extends ResourceCls {
    }
    class PaginaNest {
    }
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional({
            type: Paginated,
            isArray: true
        }),
        __metadata("design:type", Paginated)
    ], PaginaNest.prototype, "data", void 0);
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", Number)
    ], PaginaNest.prototype, "count", void 0);
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", Number)
    ], PaginaNest.prototype, "total", void 0);
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", Number)
    ], PaginaNest.prototype, "page", void 0);
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", Number)
    ], PaginaNest.prototype, "pageCount", void 0);
    class Pagina {
    }
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", Number)
    ], Pagina.prototype, "statusCode", void 0);
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", String)
    ], Pagina.prototype, "message", void 0);
    __decorate([
        api_model_property_decorator_1.ApiModelPropertyOptional(),
        __metadata("design:type", PaginaNest)
    ], Pagina.prototype, "data", void 0);
    return Pagina;
}
exports.PaginationQuery = PaginationQuery;
//# sourceMappingURL=PaginationQuery.js.map