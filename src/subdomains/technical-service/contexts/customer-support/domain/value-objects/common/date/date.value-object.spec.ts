import { IsValidDate } from "@validations";
import { DateValueObject } from ".";


describe('DateValueObject', () => {

    let VO: DateValueObject;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
        //Arrange
        const value = new Date();

        // Act
        VO = new DateValueObject(value);
    });


    //// TEST
    // Create
    it('should the VO must be defined', () => {
        //Assert
        expect(VO).toBeDefined();
    });


    it('checks if the value is a valid Date VO', () => {
        //Arrange        

        //Act        
        const result = VO.valueOf();

        //Assert
        expect(true).toBe(IsValidDate(result)); //using validation library
    })

    it(' should return False if the instance has not any errors', () => {
        //Arrange
        const value = new Date();         // correct Date

        //Act
        const result = new DateValueObject(value).hasErrors();

        //Assert
        expect(result).toBeTruthy();

    })

    it(' should return true if the instance has any errors', () => {
        //Arrange
        const value = null;                // incorrect date value

        //Act
        const result = new DateValueObject(value).hasErrors();

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

