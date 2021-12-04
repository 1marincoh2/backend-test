import { Document } from "mongoose";
import { Schema as SchemaMongose } from "mongoose";
export declare class Classification extends Document {
    name: string;
    active: string;
    sucural: any;
}
export declare type ClassificationDocument = Classification & Document;
export declare const ClassificationSchema: SchemaMongose<Classification, import("mongoose").Model<Classification, any, any, any>, {}>;
