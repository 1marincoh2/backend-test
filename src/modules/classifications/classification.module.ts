import {Module} from '@nestjs/common';
import {ClassificationController} from './classification.controller';
import {ClassificationService} from './classification.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Classification, ClassificationDocument, ClassificationSchema} from "./classification/schema/classification.schema";
import {NestjsQueryMongooseModule} from "@nestjs-query/query-mongoose";
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";


@Module({
    imports: [
        MongooseModule.forFeature([{name: Classification.name, schema: ClassificationSchema}]),
        
    ],
    controllers: [ClassificationController],
    providers: [ClassificationService]
})
export class ClassificationModule {
}
