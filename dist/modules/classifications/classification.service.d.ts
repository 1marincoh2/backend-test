/// <reference types="mongoose" />
import { Classification, ClassificationDocument } from "./classification/schema/classification.schema";
import { ModelType } from "@typegoose/typegoose/lib/types";
export declare class ClassificationService {
    model: ModelType<ClassificationDocument>;
    constructor(model: ModelType<ClassificationDocument>);
    all(): Promise<(import("mongoose").Document<any, Record<string, any>, any> & Classification & import("mongoose").Document<any, any, any> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    })[]>;
}
