import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from "./users/users.module";
import {RolesModule} from "./roles/roles.module";
import {AccessTokensModule} from "./access-tokens/access-tokens.module";

@Module({
    imports: [
        AuthModule,
        UsersModule,
        RolesModule,
        AccessTokensModule
    ]
})
export class SystemModule {
}
