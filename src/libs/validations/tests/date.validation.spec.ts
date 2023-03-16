import { IsValidDate } from "..";

describe('IsValidDate', () => {

    let validator: typeof IsValidDate;

    //Before all tests
    beforeAll(() => {
        
     });

    //Before every tests
    beforeEach(() => {
        validator = IsValidDate;
     });


    //// TEST

    // Define
    it('should define the function', () => {
        //Arrange
        //Act
        //Assert
        expect(validator).toBeDefined();
    });

    // Return True
    it('should be true', () => {
        //Arrange
        const value = new Date();
        const expected = true;
        //Act
        const result = validator(value);
        //Assert
        expect(result).toEqual(expected);
    });

    // Return False
    it('should be false', () => {
        //Arrange
        const value = undefined;
        const expected = false;
        //Act
        const result = validator(value);
        //Assert
        expect(result).toEqual(expected);
    });

    //After every tests
    afterEach(() => {
        jest.clearAllMocks();
     });

    //After all tests
    afterAll(() => {
        jest.restoreAllMocks();
     })


})
