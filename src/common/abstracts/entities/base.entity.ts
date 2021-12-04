import {
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    Generated,
    Column,
    VersionColumn,
    DeleteDateColumn
} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

export type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * This is an empty class entity
 */
export class EmptyEntity {}

/**
 * This abstract class includes ID as a Primary Key
 * @param Base Class which plans to extends from AbstractBase
 */
export function EntityBase<TBase extends Constructor>(Base: TBase) {
    abstract class AbstractBase extends Base {
        @PrimaryGeneratedColumn()
        id: number;
    }

    return AbstractBase;
}

/**
 * This abstract function includes CreatedAt && UpdatedAt timestamps can attach another class as parameter
 * @param Base Class which plans to extends from AbstractBase
 */
export function EntityBaseWithDate<TBase extends Constructor>(Base: TBase) {
    abstract class AbstractBase extends Base {
        @CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            nullable: true,
            default: () => 'CURRENT_TIMESTAMP(6)',
        })
        createdAt: Date;

        @UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP(6)',
            onUpdate: 'CURRENT_TIMESTAMP(6)',
        })
        updatedAt: Date;

        @VersionColumn({
            default: 0,
            nullable: false,
        })
        version: number;

        @Column()
        @Generated('uuid')
        uuid: string;

        @ApiProperty()
        @DeleteDateColumn({ name: 'deleted_at' })
        public deletedAt: Date;
    }

    return AbstractBase;
}
