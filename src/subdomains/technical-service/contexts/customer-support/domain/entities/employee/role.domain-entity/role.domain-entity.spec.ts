 import { NoteValueObject, RoleValueObject, UUIDValueObject } from "../../../value-objects"
import { RoleDomainEntityBase } from '.';

describe('RoleDomainEntity', () => {

    const data = {
        roleID: new UUIDValueObject(),
        roleName:  new RoleValueObject('Test'),
        roleDescription: new NoteValueObject('Role created to Test the entity')        
    }

    it('should create a new entity', () => {
        //Arrange & Act
        const role = new RoleDomainEntityBase(data);

        //Assert
        expect(role).toBeDefined();

        expect(role.roleID).toBeDefined();

        expect(role.roleName).toEqual(data.roleName);

        expect(role.roleDescription).toEqual(data.roleDescription);        
    })
})