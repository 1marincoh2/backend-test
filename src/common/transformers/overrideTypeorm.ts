import {SelectQueryBuilder} from "typeorm/query-builder/SelectQueryBuilder";
import {VIRTUAL_COLUMN_KEY} from "../decorator/VirtualColumn";
import {OptimisticLockCanNotBeUsedError} from "typeorm/error/OptimisticLockCanNotBeUsedError";

declare module "typeorm" {
    interface SelectQueryBuilder<Entity> {
        getMany(this: SelectQueryBuilder<Entity>): Promise<Entity[] | undefined>;

        getOne(this: SelectQueryBuilder<Entity>): Promise<Entity | undefined>;

        getManyAndCount(this: SelectQueryBuilder<Entity>): Promise<Entity | undefined>;
    }
}

SelectQueryBuilder.prototype.getMany = async function () {
    const {entities, raw} = await this.getRawAndEntities();

    const items = entities.map((entitiy, index) => {
        const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, entitiy) ?? {};
        const item = raw[index];

        for (const [propertyKey, name] of Object.entries<string>(metaInfo)) {
            entitiy[propertyKey] = item[name];
        }

        return entitiy;
    });

    return [...items];
};

SelectQueryBuilder.prototype.getOne = async function () {
    const {entities, raw} = await this.getRawAndEntities();
    const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, entities[0]) ?? {};

    for (const [propertyKey, name] of Object.entries<string>(metaInfo)) {
        entities[0][propertyKey] = raw[0][name];
    }

    return entities[0];
};
//
// // @ts-ignore
// SelectQueryBuilder.prototype.getManyAndCount = async function () {
//     // @ts-ignore
//     if (this.expressionMap.lockMode === "optimistic") {
//         console.log("in if")
//         throw new OptimisticLockCanNotBeUsedError();
//     }
//     console.log("saliiendo")
//
//
//     const queryRunner = this.obtainQueryRunner();
//     let transactionStartedByUs: boolean = false;
//     try {
//
//         // start transaction if it was enabled
//         if (this.expressionMap.useTransaction === true && queryRunner.isTransactionActive === false) {
//             console.log("startTransaction")
//             await queryRunner.startTransaction();
//             transactionStartedByUs = true;
//         }
//         console.log("start executeEntitiesAndRawResults")
//         this.expressionMap.queryEntity = true;
//         const {schema, raw} = await this.executeEntitiesAndRawResults(queryRunner) as {
//             schema: any[];
//             raw: any[];
//         };
//         console.log("end executeEntitiesAndRawResults")
//         console.log("start map")
//         const items = schema.map((entitiy, index) => {
//             const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, entitiy) ?? {};
//             const item = raw[index];
//
//             for (const [propertyKey, name] of Object.entries<string>(metaInfo)) {
//                 entitiy[propertyKey] = item[name];
//             }
//
//             return entitiy;
//         });
//         console.log("end map")
//         this.expressionMap.queryEntity = false;
//         const count = await this.executeCountQuery(queryRunner) as number;
//         const results: [any[], number] = [items, count] as [any[], number];
//
//         // close transaction if we started it
//         if (transactionStartedByUs) {
//             console.log("start transactionStartedByUs")
//             await this.queryRunner.commitTransaction();
//             console.log("end transactionStartedByUs")
//         }
//         console.log("regresando")
//         return results;
//
//     } catch (error) {
//         console.log("custom error", error)
//
//         // rollback transaction if we started it
//         if (transactionStartedByUs) {
//             try {
//                 await this.queryRunner.rollbackTransaction();
//             } catch (rollbackError) {
//             }
//         }
//         throw error;
//
//     } finally {
//         if (this.queryRunner !== this.queryRunner) // means we created our own query runner
//             await this.queryRunner.release();
//     }
// }