import { Document } from "mongoose";
export declare class Sucursal extends Document {
    name: string;
    location: string;
    type: string;
}
export declare type SucursalDocument = Sucursal & Document;
export declare const SucursalSchema: import("mongoose").Schema<Sucursal, import("mongoose").Model<Sucursal, any, any, any>, {}>;
