import { UUIDValueObject, FullnameValueObject, EmailValueObject, TrueFalseValueObject } from '../../../value-objects/common';

export interface IEmployeeDomainEntity{
    employeeID?: string | UUIDValueObject;
    employeeName?: string | FullnameValueObject;
    employeeEmail?: string | EmailValueObject;
    employeeRoleId?: string | UUIDValueObject;
    employeeIsActive?: boolean | TrueFalseValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}