import { StringBiggerThanMaxLength } from "..";

describe('StringBiggerThanMaxLength', () => {

    let validator: typeof StringBiggerThanMaxLength;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
        validator = StringBiggerThanMaxLength;
    });

    //// TEST
    // Define
    it('should define the function', () => {        
        //Assert
        expect(validator).toBeDefined();
    });

    // Return True
    it('should return true if value is larger than maxlength', () => {
        //Arrange
        const value = "randomText";
        const maxLength = 5;
        const expected = true;
        //Act
        const result = validator(value,maxLength);
        //Assert
        expect(result).toEqual(expected);
    });

    // Return False
    it('should return false if the value is smaller than maxlength', () => {
        //Arrange
        const value = "AnyOtherValueNotUUID";
        const maxLength = 50;
        const expected = false;
        //Act
        const result = validator(value, maxLength);
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