import {Injectable} from '@nestjs/common';
import {Role, RoleDocument} from './schema/role.schema';
import {InjectModel} from "@nestjs/mongoose";
import {ModelType} from "@typegoose/typegoose/lib/types";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role.name) public model: ModelType<RoleDocument, Role>) {
    }

}
