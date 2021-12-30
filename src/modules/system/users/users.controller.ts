import {Controller} from '@nestjs/common';
import {CrudController} from '@nestjsx/crud';

import {UsersService} from './users.service';
import {User} from './schema/user.schema';

@Controller('users')
export class UsersController {
    constructor(public service: UsersService) {
    }
}
