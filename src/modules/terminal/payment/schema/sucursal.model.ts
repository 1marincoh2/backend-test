import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class sucursalModel{
    @IDField(() => ID)
    _id: string

    @Field()
    name: string;

    @Field()
    location:string
}