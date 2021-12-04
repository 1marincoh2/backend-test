import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
    validate(email: any): Promise<boolean>;
}
export declare function IsEmailAlreadyExist(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
