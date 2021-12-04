/// <reference types="mongoose" />
import { Preference, PreferenceDocument } from "./schema/preference.schema";
import { ModelType } from "@typegoose/typegoose/lib/types";
export declare class PreferenceService {
    model: ModelType<PreferenceDocument>;
    constructor(model: ModelType<PreferenceDocument>);
    all(): Promise<(import("mongoose").Document<any, Record<string, any>, any> & Preference & import("mongoose").Document<any, any, any> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    })[]>;
}
