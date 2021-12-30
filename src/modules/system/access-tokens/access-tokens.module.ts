import {Module} from '@nestjs/common';
import {AccessTokensService} from './access-tokens.service';
import {AccessTokensController} from './access-tokens.controller';
import {AccessTokens, AccessTokensSchema} from './schema/access-tokens.schema';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([{name: AccessTokens.name, schema: AccessTokensSchema}]),
    ],
    exports: [AccessTokensService],
    providers: [AccessTokensService],
    controllers: [AccessTokensController],
})
export class AccessTokensModule {
}
