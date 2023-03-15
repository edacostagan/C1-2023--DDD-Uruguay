import { v4 as uuid } from "uuid";

import { UUIDValueObject, DateValueObject, } from "../../../value-objects/common";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty/warranty-status.value-object";
import { IWarrantyDomainEntity } from '../../interfaces/invoice/warranty.domain-entity.interface';
import { IsUUID } from '../../../../../../../../libs/validations/is-uuid.validation';


export class WarrantyDomainEntityBase implements IWarrantyDomainEntity {
   

    warrantyID?: string | UUIDValueObject;
    startDate?: Date | DateValueObject;
    endDate?: Date | DateValueObject;    
    warrantyStatus?: string | WarrantyStatusValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor( _data?: IWarrantyDomainEntity){
        
        if(_data?.warrantyID && IsUUID(_data?.warrantyID)) this.warrantyID = _data.warrantyID;
        else this.warrantyID = uuid();

        if(_data?.startDate) this.startDate = _data.startDate;
        
        if(_data?.endDate) this.endDate = _data.endDate;       

        if(_data?.warrantyStatus) this.warrantyStatus = _data.warrantyStatus;

        this.createdAt = new Date();
    }    
}