import { IsValidFullname } from "..";

describe('IsValidFullname', () => {

    let validator: typeof IsValidFullname;

    //Before all tests
    beforeAll(() => {
        
     });

    //Before every tests
    beforeEach(() => {
        validator = IsValidFullname;
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
        const value = "Surname Lastname";
        const expected = true;
        //Act
        const result = validator(value);
        //Assert
        expect(result).toEqual(expected);
    });

    // Return False
    it('should be false', () => {
        //Arrange
        const value = "12Firstname LastName";
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
