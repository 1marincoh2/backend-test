"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.VIRTUAL_COLUMN_KEY = Symbol("VIRTUAL_COLUMN_KEY");
function VirtualColumn(name) {
    return (target, propertyKey) => {
        const metaInfo = Reflect.getMetadata(exports.VIRTUAL_COLUMN_KEY, target) || {};
        metaInfo[propertyKey] = name !== null && name !== void 0 ? name : propertyKey;
        Reflect.defineMetadata(exports.VIRTUAL_COLUMN_KEY, metaInfo, target);
    };
}
exports.VirtualColumn = VirtualColumn;
//# sourceMappingURL=VirtualColumn.js.map