import {Injectable} from '@nestjs/common';
import {Sucursal, SucursalDocument} from "./schema/sucursal.schema";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class SucursalService {
    constructor(@InjectModel(Sucursal.name) public model: ModelType<SucursalDocument>) {
    }

    async all() {
       return  await this.model.find().limit(2).exec()
    }
}
