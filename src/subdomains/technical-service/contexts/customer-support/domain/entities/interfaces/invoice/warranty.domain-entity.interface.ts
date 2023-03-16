import { DateValueObject, UUIDValueObject } from "../../../value-objects/common";

import { WarrantyStatusValueObject } from "../../../value-objects/warranty/warranty-status.value-object";
import { NoteValueObject } from '../../../value-objects/common/note/note.value-object';

export interface IWarrantyDomainEntity {

    warrantyID?: string | UUIDValueObject;
    startDate?:  Date | DateValueObject;
    endDate?:  Date | DateValueObject;    
    warrantyStatus?: string | WarrantyStatusValueObject;
    warrantyReason?: string | NoteValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}