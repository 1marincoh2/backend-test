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
    users: User[] = [
        {
            email:'amir@gmail.com',
            username:'amir',
            password: '123456',
            enabled: true,
        },
        {
            email:'jose@gmail.com',
            username:'jose',
            password: '123456',
            enabled: true,
        }
    ];
    constructor(public service: UsersService) {
        this.model = service.model
        this.newDate()
    }

    async newDate(){
        await this.service.model.create(this.users)
    }
}
