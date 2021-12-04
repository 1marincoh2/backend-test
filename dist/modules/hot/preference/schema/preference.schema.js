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
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
var TriggersStatus;
(function (TriggersStatus) {
    TriggersStatus["PENDING"] = "pending";
    TriggersStatus["COMPLETED"] = "completed";
    TriggersStatus["DISCARDED"] = "discarded";
})(TriggersStatus || (TriggersStatus = {}));
let Preference = class Preference extends mongoose_1.Document {
};
__decorate([
    mongoose_2.Prop({ type: String }),
    __metadata("design:type", String)
], Preference.prototype, "nombre", void 0);
__decorate([
    mongoose_2.Prop({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Preference.prototype, "active", void 0);
Preference = __decorate([
    mongoose_2.Schema({
        collection: 'preferences',
        timestamps: true
    })
], Preference);
exports.Preference = Preference;
exports.PreferenceSchema = mongoose_2.SchemaFactory.createForClass(Preference);
//# sourceMappingURL=preference.schema.js.map