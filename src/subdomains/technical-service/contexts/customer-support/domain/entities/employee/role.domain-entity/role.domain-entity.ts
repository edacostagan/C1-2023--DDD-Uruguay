import { v4 as uuid } from "uuid";

import { IsUUID } from "@validations";
import { UUIDValueObject, NoteValueObject, RoleValueObject } from "../../../value-objects";
import { IRoleDomainEntity } from "../../interfaces/employee";


/**
 * Role entity
 * 
 *
 * @export
 * @class RoleDomainEntityBase
 * @implements {IRoleDomainEntity}
 */
export class RoleDomainEntityBase implements IRoleDomainEntity {
    roleID?: string | UUIDValueObject;
    roleName?: string | RoleValueObject;
    roleDescription?: string | NoteValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(_data?: IRoleDomainEntity) {

        if(_data?.roleID && IsUUID(_data?.roleID)) this.roleID = _data.roleID;
        else this.roleID = uuid();

        if(_data?.roleName) this.roleName = _data.roleName;

        if(_data?.roleDescription) this.roleDescription = _data.roleDescription;

        this.createdAt = new Date();
    }
}