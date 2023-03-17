import { DeviceTypeValueObject, NoteValueObject, UUIDValueObject } from "../../../value-objects"
import { DeviceDomainEntityBase } from ".";
import { IssueValueObject } from '../../../value-objects/device/issue.value-object';

describe('DeviceDomainEntityBase', () => {

    const data = {
        deviceID: new UUIDValueObject(),
        deviceType: new DeviceTypeValueObject("PC"),
        issues: new IssueValueObject('some issues')        
    }

    
    it('should create a new entity', () => {
        //Arrange & Act
        const newEntity = new DeviceDomainEntityBase(data);

        //Assert
        expect(newEntity).toBeDefined();

        expect(newEntity.deviceID).toBeDefined();        

        expect(newEntity.deviceType).toEqual(data.deviceType);        

        expect(newEntity.issues).toEqual(data.issues);        


       
    })
})