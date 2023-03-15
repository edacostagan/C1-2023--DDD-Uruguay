import { DateValueObject, NoteValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../value-objects/common";

export interface IRepairsDomainEntity{
    repairID?: string | UUIDValueObject;
    repairDate?: Date | DateValueObject;
    details?: string | NoteValueObject;
    workFinished?: boolean | TrueFalseValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}