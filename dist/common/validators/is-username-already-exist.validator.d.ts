import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsUsernameAlreadyExistConstraint implements ValidatorConstraintInterface {
    validate(username: any): Promise<boolean>;
}
export declare function IsUsernameAlreadyExist(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
