import {Injectable} from '@nestjs/common';
import {Classification, ClassificationDocument} from "./classification/schema/classification.schema";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class ClassificationService {
    constructor(@InjectModel(Classification.name) public model: ModelType<ClassificationDocument, Classification>) {
    }

    async all() {
        return await this.model.find({
            name: "tulum",
            "sucural.name": "centro"
        })
    }
}
