import {Controller} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {Preference, PreferenceDocument} from "./schema/preference.schema";
import {Crud} from "nestjs-mongoose-crud";
import {PreferenceService} from "./preference.service";


@Crud({
    model: Preference
})
@Controller('preference')
export class PreferenceController {
    crudOptions = {}
    model
    constructor(public service: PreferenceService) {
       this.model = service.model
    }

}
