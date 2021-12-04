import {Module} from '@nestjs/common';
import {SucursalController} from './sucursal.controller';
import {SucursalService} from './sucursal.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Sucursal, SucursalDocument, SucursalSchema} from "./schema/sucursal.schema";
import {NestjsQueryMongooseModule} from "@nestjs-query/query-mongoose";
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";


@Module({
    imports: [
        MongooseModule.forFeature([{name: Sucursal.name, schema: SucursalSchema}]),
        
    ],
    controllers: [SucursalController],
    providers: [SucursalService]
})
export class SucursalModule {
}
