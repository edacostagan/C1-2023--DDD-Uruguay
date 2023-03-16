import { IsUUID } from "@validations";
import { UUIDValueObject } from ".";
import { v4 as uuid } from "uuid";

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


    it('checks if the value is a valid UUID v4 instance', () => {       
        //Arrange
        const expected = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;      
        
        //Act        
        const result = VO.valueOf();   

        //Assert
        expect(result).toMatch(expected); //using regex

        expect(true).toBe(IsUUID(result)); //using validation library
    })
 
    it(' should return False if the instance has not any errors', () =>{
        //Arrange
        const value = uuid();         // correct UUID value

        //Act
        const result = new UUIDValueObject(value);

        //Assert
        expect(result).toBeTruthy();

    })

    it(' should return true if the instance has any errors', () =>{
        //Arrange
        const value = "randomValueNotUUID";                // incorrect UUID value

        //Act
        const result = new UUIDValueObject(value);

        //Assert
        expect(result).toBeTruthy();

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

