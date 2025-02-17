import { FullnameValueObject, EmailValueObject, PhoneValueObject } from '../../../value-objects/common';
import { UUIDValueObject } from '../../../value-objects/common/uuid/uuid.value-object';

export interface ICustomerDomainEntity {

    customerID?: string | UUIDValueObject;
    customerName?: string | FullnameValueObject;
    customerEmail?: string | EmailValueObject;
    customerPhone?: string | PhoneValueObject; 
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    
}