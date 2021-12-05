import {Controller, Get} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {Classification, ClassificationDocument} from "./classification/schema/classification.schema";
import {Crud} from "nestjs-mongoose-crud";
import {ClassificationService} from "./classification.service";


@Crud({
    model: Classification,
})
@Controller('classification')
export class ClassificationController {
    crudOptions = {}
    model

    constructor(public service: ClassificationService) {
        this.model = service.model
    }

    @Get('consulta/prueba')
    async prubea() {
        const result = await this.service.all()
        return {
            data: true,
            result
        }
    }


}
