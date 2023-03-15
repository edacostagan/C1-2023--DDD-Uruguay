import { UUIDValueObject } from "../../../value-objects/common";
import { DeviceTypeValueObject, IssueValueObject } from '../../../value-objects/device';

export interface IDeviceDomainEntity {

    deviceID?: string | UUIDValueObject;
    deviceType?: string | DeviceTypeValueObject;
    issues?: string | IssueValueObject;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

}