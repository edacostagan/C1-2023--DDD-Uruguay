import { StringSmallerThanMinLength } from "..";


describe('StringSmallerThanMinLength', () => {

    let validator: typeof StringSmallerThanMinLength;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
        validator = StringSmallerThanMinLength;
    });

    //// TEST
    // Define
    it('should define the function', () => {        
        //Assert
        expect(validator).toBeDefined();
    });

    // Return True
    it('should return true if value is smaller than minLength', () => {
        //Arrange
        const value = "randomText";
        const minLength = 50;
        const expected = true;
        //Act
        const result = validator(value,minLength);
        //Assert
        expect(result).toEqual(expected);
    });

    // Return False
    it('should return false if the value is bigger than minLength', () => {
        //Arrange
        const value = "AnyOtherValueNotUUID";
        const minLength = 10;
        const expected = false;
        //Act
        const result = validator(value, minLength);
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