import { Document } from "mongoose";
export declare class SucursalClassi extends Document {
    name: string;
}
export declare type SucursalClassiDocument = SucursalClassi & Document;
export declare const SucursalClassiSchema: import("mongoose").Schema<SucursalClassi, import("mongoose").Model<SucursalClassi, any, any, any>, {}>;
