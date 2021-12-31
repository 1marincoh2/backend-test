import {Controller} from '@nestjs/common';

import {UsersService} from './users.service';
import {User, UserDocument} from './schema/user.schema';
import {Crud} from "nestjs-mongoose-crud";
import {ModelType} from "@typegoose/typegoose/lib/types";

@Crud({
    model: User,
})
@Controller('users')
export class UsersController {
    crudOptions = {}
    model: ModelType<UserDocument, User>

    constructor(public service: UsersService) {
        this.model = service.model
    }
}
