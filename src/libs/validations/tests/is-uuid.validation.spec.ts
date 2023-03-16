import { IsUUID } from "..";
import { v4 as uuid } from "uuid";

describe('IsUUID', () => {

    let validator: typeof IsUUID;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
        validator = IsUUID;
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
    it('should return true', () => {
        //Arrange
        const value = uuid();
        const expected = true;
        //Act
        const result = validator(value);
        //Assert
        expect(result).toEqual(expected);
    });

    // Return False
    it('should return false', () => {
        //Arrange
        const value = "AnyOtherValueNotUUID";
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