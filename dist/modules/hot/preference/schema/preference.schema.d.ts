import { Document } from "mongoose";
export declare class Preference extends Document {
    nombre: string;
    active: boolean;
}
export declare type PreferenceDocument = Preference & Document;
export declare const PreferenceSchema: import("mongoose").Schema<Preference, import("mongoose").Model<Preference, any, any, any>, {}>;
