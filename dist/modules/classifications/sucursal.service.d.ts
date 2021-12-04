import { SucursalDocument } from "./schema/sucursal.schema";
import { ModelType } from "@typegoose/typegoose/lib/types";
export declare class SucursalService {
    model: ModelType<SucursalDocument>;
    constructor(model: ModelType<SucursalDocument>);
    all(): Promise<any[]>;
}
