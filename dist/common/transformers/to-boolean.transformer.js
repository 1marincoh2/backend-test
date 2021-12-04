"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
function ToBoolean() {
    return class_transformer_1.Transform((v) => ['1', 1, 'true', true].includes(v));
}
exports.ToBoolean = ToBoolean;
//# sourceMappingURL=to-boolean.transformer.js.map