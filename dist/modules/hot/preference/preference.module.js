"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const preference_controller_1 = require("./preference.controller");
const preference_service_1 = require("./preference.service");
const mongoose_1 = require("@nestjs/mongoose");
const preference_schema_1 = require("./schema/preference.schema");
const query_mongoose_1 = require("@nestjs-query/query-mongoose");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const preference_model_1 = require("./schema/preference.model");
let PreferenceModule = class PreferenceModule {
};
PreferenceModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: preference_schema_1.Preference.name, schema: preference_schema_1.PreferenceSchema }]),
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    query_mongoose_1.NestjsQueryMongooseModule.forFeature([
                        { document: preference_schema_1.Preference, name: preference_schema_1.Preference.name, schema: preference_schema_1.PreferenceSchema },
                    ]),
                ],
                resolvers: [{ DTOClass: preference_model_1.PreferenceModel, EntityClass: preference_schema_1.Preference }],
            }),
        ],
        controllers: [preference_controller_1.PreferenceController],
        providers: [preference_service_1.PreferenceService]
    })
], PreferenceModule);
exports.PreferenceModule = PreferenceModule;
//# sourceMappingURL=preference.module.js.map