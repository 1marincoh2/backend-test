import {Controller} from '@nestjs/common';
import {Crud} from "nestjs-mongoose-crud"
import {Role, RoleDocument} from './schema/role.schema';
import {RolesService} from './roles.service';
import {ApiTags} from "@nestjs/swagger";
import {ModelType} from "@typegoose/typegoose/lib/types";

@ApiTags('System')
@Crud({
    model: Role,
})
@Controller('system/roles')
export class RolesController {
    crudOptions = {}
    model: ModelType<RoleDocument, Role>

    constructor(public service: RolesService) {
        this.model = service.model
    }

}
