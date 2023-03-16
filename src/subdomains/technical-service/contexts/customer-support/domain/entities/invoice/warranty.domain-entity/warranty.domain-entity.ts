import { v4 as uuid } from "uuid";
import { WarrantyStatusValueObject, UUIDValueObject, DateValueObject, NoteValueObject, } from "../../../value-objects";
import { IWarrantyDomainEntity } from '../../interfaces/invoice';
import { IsUUID } from '@validations';


export class WarrantyDomainEntityBase implements IWarrantyDomainEntity {
   

    warrantyID?: string | UUIDValueObject;
    startDate?: Date | DateValueObject;
    endDate?: Date | DateValueObject;    
    warrantyStatus?: string | WarrantyStatusValueObject;
    warrantyReason?: string | NoteValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor( _data?: IWarrantyDomainEntity){
        
        if(_data?.warrantyID && IsUUID(_data?.warrantyID)) this.warrantyID = _data.warrantyID;
        else this.warrantyID = uuid();

        if(_data?.startDate) this.startDate = _data.startDate;
        
        if(_data?.endDate) this.endDate = _data.endDate;       

        if(_data?.warrantyStatus) this.warrantyStatus = _data.warrantyStatus;

        if(_data?.warrantyReason) this.warrantyReason = _data.warrantyReason;

        this.createdAt = new Date();
    }    
}