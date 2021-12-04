import { PreferenceDocument } from "./schema/preference.schema";
import { ModelType } from "@typegoose/typegoose/lib/types";
export declare class PreferenceService {
    model: ModelType<PreferenceDocument>;
    constructor(model: ModelType<PreferenceDocument>);
    all(): Promise<any[]>;
}
