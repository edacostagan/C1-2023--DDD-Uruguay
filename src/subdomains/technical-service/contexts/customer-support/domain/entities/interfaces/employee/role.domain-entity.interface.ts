import { RoleValueObject, NoteValueObject, UUIDValueObject } from '../../../value-objects';

export interface IRoleDomainEntity{

    roleID?: string | UUIDValueObject;
    roleName?: string | RoleValueObject;
    roleDescription?: string | NoteValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
   
}