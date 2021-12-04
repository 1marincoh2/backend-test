export declare type ClassType<T = any> = new (...args: any[]) => T;
export declare function PaginationQuery<T extends ClassType>(ResourceCls: T): any;
