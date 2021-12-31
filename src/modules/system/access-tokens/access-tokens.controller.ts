import { Controller } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {Role, RoleDocument} from "../roles/schema/role.schema";
import {RolesService} from "../roles/roles.service";
import {Crud} from "nestjs-mongoose-crud";
import {AccessTokens, AccessTokensDocument} from "./schema/access-tokens.schema";
import {AccessTokensService} from "./access-tokens.service";

@ApiTags('System')
@Crud({
    model: AccessTokens,
})
@Controller('system/access-tokens')
export class AccessTokensController {
    crudOptions = {}
    model: ModelType<AccessTokensDocument, AccessTokens>

    constructor(public service: AccessTokensService) {
        this.model = service.model
    }
}
