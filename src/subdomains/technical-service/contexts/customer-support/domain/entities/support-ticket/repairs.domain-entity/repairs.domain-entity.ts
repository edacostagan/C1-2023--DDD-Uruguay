import { v4 as uuid } from "uuid";

import { UUIDValueObject, DateValueObject, TrueFalseValueObject, NoteValueObject } from '../../../value-objects';
import { IRepairsDomainEntity } from '../../interfaces/support-ticket/';
import { IsBoolean, IsUUID, IsValidDate } from "@validations";


export class RepairsDomainEntityBase implements IRepairsDomainEntity{
    repairID?: string | UUIDValueObject;
    repairDate?: Date | DateValueObject;
    details?: string | NoteValueObject;
    workFinished?: boolean | TrueFalseValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(_data?: IRepairsDomainEntity){

        if(_data?.repairID && IsUUID(_data?.repairID)) this.repairID = _data.repairID;
        else this.repairID = uuid();

        if(_data?.repairDate) this.repairDate = _data.repairDate; // && IsValidDate(_data?.repairDate)
        //else this.repairDate = new Date();

        if (_data?.details ) this.details = _data.details;      

        if (_data?.workFinished && IsBoolean(_data?.workFinished)) this.workFinished = _data.workFinished;

        this.createdAt = new Date();
    }    
}