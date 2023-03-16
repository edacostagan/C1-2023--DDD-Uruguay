import { IsUUID } from "../../../../../../../../../src/libs/validations";
import { UUIDValueObject } from ".";

describe('UUIDValueObject', () => {

    let VO: UUIDValueObject;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
        //Arrange & Act
      VO = new UUIDValueObject();
     });


    //// TEST
    // Create
    it('should the defined', () => {        
        //Assert
        expect(VO).toBeDefined();
    });


    it('checks the value of the instance', () => {       
        //Arrange
        const expected = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;      

        //Act        
        const result = VO.valueOf();   

        //Assert
        expect(result).toMatch(expected); //using regex

        expect(true).toBe(IsUUID(result)); //using validation library
    })
 
    //After every tests
    afterEach(() => {
        jest.clearAllMocks();
     });

    //After all tests
    afterAll(() => {
        jest.restoreAllMocks();
     })


})

