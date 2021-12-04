import {Module} from '@nestjs/common';
import {PreferenceController} from './preference.controller';
import {PreferenceService} from './preference.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Preference, PreferenceDocument, PreferenceSchema} from "./schema/preference.schema";
import {NestjsQueryMongooseModule} from "@nestjs-query/query-mongoose";
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";
import {PreferenceModel} from "./schema/preference.model";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Preference.name, schema: PreferenceSchema}]),
        NestjsQueryGraphQLModule.forFeature({
            // import the NestjsQueryMongooseModule to register the entity with mongoose
            // and provide a QueryService
            imports: [
                NestjsQueryMongooseModule.forFeature([
                    { document: Preference, name: Preference.name, schema: PreferenceSchema },
                ]),
            ],
            // describe the resolvers you want to expose
            resolvers: [{ DTOClass: PreferenceModel, EntityClass: Preference }],
        }),
    ],
    controllers: [PreferenceController],
    providers: [PreferenceService]
})
export class PreferenceModule {
}
