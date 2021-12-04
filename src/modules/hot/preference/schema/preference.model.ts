import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class PreferenceModel{
    @IDField(() => ID)
    _id: string

    @Field()
    name: string;

    @Field()
    active: boolean;
}