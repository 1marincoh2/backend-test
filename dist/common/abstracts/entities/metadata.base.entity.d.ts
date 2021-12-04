import { Constructor } from './base.entity';
export declare function BaseEntityMetadata<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        key: string;
        value?: string;
    };
} & TBase;
