import { v4 as uuid } from "uuid";

import { UUIDValueObject, FullnameValueObject, TrueFalseValueObject, EmailValueObject } from "../../value-objects/common";

import { IEmployeeDomainEntity } from "../interfaces/employee/employee.domain-entity.interface";
import { IsUUID, IsEmail, IsValidFullname} from '@validations';

export class EmployeeDomainEntityBase implements IEmployeeDomainEntity{
    employeeID?: string | UUIDValueObject;
    employeeName?: string | FullnameValueObject;
    employeeEmail?: string | EmailValueObject;
    employeeRoleId?: string | UUIDValueObject;
    employeeIsActive?: boolean | TrueFalseValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(_data?: IEmployeeDomainEntity){

        if(_data?.employeeID && IsUUID(_data?.employeeID)) this.employeeID = _data.employeeID;
        else this.employeeID = uuid();

        if(_data?.employeeName && IsValidFullname(_data?.employeeName as string)) this.employeeName = _data.employeeName;

        if(_data?.employeeEmail && IsEmail(_data?.employeeEmail as string)) this.employeeEmail = _data.employeeEmail;

        if(_data?.employeeRoleId) this.employeeRoleId = _data.employeeRoleId;

        this.employeeIsActive = true;
        
        this.createdAt = new Date();
    }
}