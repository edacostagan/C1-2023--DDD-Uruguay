import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from '../../../value-objects/common';

export interface ISupportTicketEntity{

    ticketID?: string | UUIDValueObject;
    dateOpen?: Date | DateValueObject;
    deviceID?: string | UUIDValueObject;
    repairsID?: string | UUIDValueObject;
    employeeID?: string | UUIDValueObject;    
    isOpen?: boolean | TrueFalseValueObject;
    dateClose?: Date | DateValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

}