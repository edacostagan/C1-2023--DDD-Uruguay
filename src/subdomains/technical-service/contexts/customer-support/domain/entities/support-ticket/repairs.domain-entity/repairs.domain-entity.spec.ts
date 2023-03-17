import { DateValueObject, NoteValueObject, UUIDValueObject } from "../../../value-objects"
import { RepairsDomainEntityBase } from ".";

describe('RepairsDomainEntity', () => {

    const data = {
        repairID: new UUIDValueObject(),
        repairDate: new DateValueObject(new Date()),
        details: new NoteValueObject('some issues'),
        workFinished: false       
    }

    it('should create a new entity', () => {
        //Arrange & Act
        const newEntity = new RepairsDomainEntityBase(data);

        //Assert
        expect(newEntity).toBeDefined();

        expect(newEntity.repairID).toBeDefined();        

        expect(newEntity.details).toEqual(data.details);        
       
    })
})