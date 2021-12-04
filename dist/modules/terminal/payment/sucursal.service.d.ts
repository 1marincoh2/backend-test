/// <reference types="mongoose" />
import { Sucursal, SucursalDocument } from "./schema/sucursal.schema";
import { ModelType } from "@typegoose/typegoose/lib/types";
export declare class SucursalService {
    model: ModelType<SucursalDocument>;
    constructor(model: ModelType<SucursalDocument>);
    all(): Promise<(import("mongoose").Document<any, Record<string, any>, any> & Sucursal & import("mongoose").Document<any, any, any> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    })[]>;
}
