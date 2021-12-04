import {Controller} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {Sucursal, SucursalDocument} from "./schema/sucursal.schema";
import {Crud} from "nestjs-mongoose-crud";
import {SucursalService} from "./sucursal.service";


@Crud({
    model: Sucursal
})
@Controller('sucursal')
export class SucursalController {
    crudOptions = {}
    model
    constructor(public service: SucursalService) {
       this.model = service.model
    }

}
