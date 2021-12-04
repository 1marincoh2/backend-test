export declare type Constructor<T = {}> = new (...args: any[]) => T;
export declare class EmptyEntity {
}
export declare function EntityBase<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        id: number;
    };
} & TBase;
export declare function EntityBaseWithDate<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        createdAt: Date;
        updatedAt: Date;
        version: number;
        uuid: string;
        deletedAt: Date;
    };
} & TBase;
