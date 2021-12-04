
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CityModelSortFields {
    _id = "_id"
}

export enum PreferenceModelSortFields {
    _id = "_id"
}

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export enum SortNulls {
    NULLS_FIRST = "NULLS_FIRST",
    NULLS_LAST = "NULLS_LAST"
}

export class CityModelDeleteFilter {
    _id?: Nullable<IDFilterComparison>;
    and?: Nullable<CityModelDeleteFilter[]>;
    or?: Nullable<CityModelDeleteFilter[]>;
}

export class CityModelFilter {
    _id?: Nullable<IDFilterComparison>;
    and?: Nullable<CityModelFilter[]>;
    or?: Nullable<CityModelFilter[]>;
}

export class CityModelSort {
    direction: SortDirection;
    field: CityModelSortFields;
    nulls?: Nullable<SortNulls>;
}

export class CityModelUpdateFilter {
    _id?: Nullable<IDFilterComparison>;
    and?: Nullable<CityModelUpdateFilter[]>;
    or?: Nullable<CityModelUpdateFilter[]>;
}

export class CreateCityModel {
    _id?: Nullable<string>;
    city?: Nullable<string>;
    region?: Nullable<string>;
    regionCode?: Nullable<number>;
}

export class CreateManyCityModelsInput {
    cityModels: CreateCityModel[];
}

export class CreateManyPreferenceModelsInput {
    preferenceModels: CreatePreferenceModel[];
}

export class CreateOneCityModelInput {
    cityModel: CreateCityModel;
}

export class CreateOnePreferenceModelInput {
    preferenceModel: CreatePreferenceModel;
}

export class CreatePreferenceModel {
    _id?: Nullable<string>;
    active?: Nullable<boolean>;
    name?: Nullable<string>;
}

export class CursorPaging {
    after?: Nullable<ConnectionCursor>;
    before?: Nullable<ConnectionCursor>;
    first?: Nullable<number>;
    last?: Nullable<number>;
}

export class DeleteManyCityModelsInput {
    filter: CityModelDeleteFilter;
}

export class DeleteManyPreferenceModelsInput {
    filter: PreferenceModelDeleteFilter;
}

export class DeleteOneCityModelInput {
    id: string;
}

export class DeleteOnePreferenceModelInput {
    id: string;
}

export class IDFilterComparison {
    eq?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    iLike?: Nullable<string>;
    in?: Nullable<string[]>;
    is?: Nullable<boolean>;
    isNot?: Nullable<boolean>;
    like?: Nullable<string>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    neq?: Nullable<string>;
    notILike?: Nullable<string>;
    notIn?: Nullable<string[]>;
    notLike?: Nullable<string>;
}

export class PreferenceModelDeleteFilter {
    _id?: Nullable<IDFilterComparison>;
    and?: Nullable<PreferenceModelDeleteFilter[]>;
    or?: Nullable<PreferenceModelDeleteFilter[]>;
}

export class PreferenceModelFilter {
    _id?: Nullable<IDFilterComparison>;
    and?: Nullable<PreferenceModelFilter[]>;
    or?: Nullable<PreferenceModelFilter[]>;
}

export class PreferenceModelSort {
    direction: SortDirection;
    field: PreferenceModelSortFields;
    nulls?: Nullable<SortNulls>;
}

export class PreferenceModelUpdateFilter {
    _id?: Nullable<IDFilterComparison>;
    and?: Nullable<PreferenceModelUpdateFilter[]>;
    or?: Nullable<PreferenceModelUpdateFilter[]>;
}

export class UpdateCityModel {
    _id?: Nullable<string>;
    city?: Nullable<string>;
    region?: Nullable<string>;
    regionCode?: Nullable<number>;
}

export class UpdateManyCityModelsInput {
    filter: CityModelUpdateFilter;
    update: UpdateCityModel;
}

export class UpdateManyPreferenceModelsInput {
    filter: PreferenceModelUpdateFilter;
    update: UpdatePreferenceModel;
}

export class UpdateOneCityModelInput {
    id: string;
    update: UpdateCityModel;
}

export class UpdateOnePreferenceModelInput {
    id: string;
    update: UpdatePreferenceModel;
}

export class UpdatePreferenceModel {
    _id?: Nullable<string>;
    active?: Nullable<boolean>;
    name?: Nullable<string>;
}

export class CityModel {
    _id: string;
    city: string;
    region: string;
    regionCode: number;
}

export class CityModelAggregateGroupBy {
    _id?: Nullable<string>;
}

export class CityModelConnection {
    edges: CityModelEdge[];
    pageInfo: PageInfo;
}

export class CityModelCountAggregate {
    _id?: Nullable<number>;
}

export class CityModelDeleteResponse {
    _id?: Nullable<string>;
    city?: Nullable<string>;
    region?: Nullable<string>;
    regionCode?: Nullable<number>;
}

export class CityModelEdge {
    cursor: ConnectionCursor;
    node: CityModel;
}

export class CityModelMaxAggregate {
    _id?: Nullable<string>;
}

export class CityModelMinAggregate {
    _id?: Nullable<string>;
}

export class DeleteManyResponse {
    deletedCount: number;
}

export abstract class IMutation {
    abstract createManyCityModels(input: CreateManyCityModelsInput): CityModel[] | Promise<CityModel[]>;

    abstract createManyPreferenceModels(input: CreateManyPreferenceModelsInput): PreferenceModel[] | Promise<PreferenceModel[]>;

    abstract createOneCityModel(input: CreateOneCityModelInput): CityModel | Promise<CityModel>;

    abstract createOnePreferenceModel(input: CreateOnePreferenceModelInput): PreferenceModel | Promise<PreferenceModel>;

    abstract deleteManyCityModels(input: DeleteManyCityModelsInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteManyPreferenceModels(input: DeleteManyPreferenceModelsInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteOneCityModel(input: DeleteOneCityModelInput): CityModelDeleteResponse | Promise<CityModelDeleteResponse>;

    abstract deleteOnePreferenceModel(input: DeleteOnePreferenceModelInput): PreferenceModelDeleteResponse | Promise<PreferenceModelDeleteResponse>;

    abstract updateManyCityModels(input: UpdateManyCityModelsInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateManyPreferenceModels(input: UpdateManyPreferenceModelsInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateOneCityModel(input: UpdateOneCityModelInput): CityModel | Promise<CityModel>;

    abstract updateOnePreferenceModel(input: UpdateOnePreferenceModelInput): PreferenceModel | Promise<PreferenceModel>;
}

export class PageInfo {
    endCursor?: Nullable<ConnectionCursor>;
    hasNextPage?: Nullable<boolean>;
    hasPreviousPage?: Nullable<boolean>;
    startCursor?: Nullable<ConnectionCursor>;
}

export class PreferenceModel {
    _id: string;
    active: boolean;
    name: string;
}

export class PreferenceModelAggregateGroupBy {
    _id?: Nullable<string>;
}

export class PreferenceModelConnection {
    edges: PreferenceModelEdge[];
    pageInfo: PageInfo;
}

export class PreferenceModelCountAggregate {
    _id?: Nullable<number>;
}

export class PreferenceModelDeleteResponse {
    _id?: Nullable<string>;
    active?: Nullable<boolean>;
    name?: Nullable<string>;
}

export class PreferenceModelEdge {
    cursor: ConnectionCursor;
    node: PreferenceModel;
}

export class PreferenceModelMaxAggregate {
    _id?: Nullable<string>;
}

export class PreferenceModelMinAggregate {
    _id?: Nullable<string>;
}

export abstract class IQuery {
    abstract cityModel(id: string): Nullable<CityModel> | Promise<Nullable<CityModel>>;

    abstract cityModels(filter?: Nullable<CityModelFilter>, paging?: Nullable<CursorPaging>, sorting?: Nullable<CityModelSort[]>): CityModelConnection | Promise<CityModelConnection>;

    abstract preferenceModel(id: string): Nullable<PreferenceModel> | Promise<Nullable<PreferenceModel>>;

    abstract preferenceModels(filter?: Nullable<PreferenceModelFilter>, paging?: Nullable<CursorPaging>, sorting?: Nullable<PreferenceModelSort[]>): PreferenceModelConnection | Promise<PreferenceModelConnection>;
}

export class UpdateManyResponse {
    updatedCount: number;
}

export type ConnectionCursor = any;
type Nullable<T> = T | null;
