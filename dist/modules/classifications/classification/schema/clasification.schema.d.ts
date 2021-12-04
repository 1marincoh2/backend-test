import { Document } from "mongoose";
export declare class Classification extends Document {
    name: string;
    location: string;
    type: string;
}
export declare type ClassificationDocument = Classification & Document;
export declare const ClassificationSchema: import("mongoose").Schema<Classification, import("mongoose").Model<Classification, any, any, any>, {}>;
