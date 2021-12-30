import {Controller} from '@nestjs/common';
import {Crud, CrudController, CrudRequest, Override, ParsedRequest} from '@nestjsx/crud';
import {Role} from './schema/role.schema';
import {RolesService} from './roles.service';
import {ApiBody, ApiProperty, ApiTags} from "@nestjs/swagger";
import {LoginDto} from "../auth/dtos";
import {PaginationQuery} from "../../../common/interfaces/PaginationQuery";

@ApiTags('System')
@Controller('system/roles')
export class RolesController {
    constructor(
        readonly service: RolesService,
    ) {
    }

}
