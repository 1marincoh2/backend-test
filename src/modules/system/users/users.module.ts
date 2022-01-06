import {Module} from '@nestjs/common';

import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {User, UserDocument, UserSchema} from './schema/user.schema';
import {MongooseModule} from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: User.name,
                useFactory: () => {
                    const schema = UserSchema;
                    schema.pre<UserDocument>('save', async function (next) {
                        var user = this;
                          // only hash the password if it has been modified (or is new)
                        if (!user.isModified('password')) return next();       
                        const salt = await bcrypt.genSalt(10) // creates salt
                        this.password = await bcrypt.hash(this.password, salt) //generates hash and combines it with the salt
                    })
                    return schema;
                }
                //schema: UserSchema
            }
        ]),
    ],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {
}
