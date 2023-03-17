import { CreateRoleUseCase } from ".";

describe('CreateRoleUseCase', () => {

    let validator: typeof CreateRoleUseCase;

    //Before all tests
    beforeAll(() => {
        
     });

    //Before every tests
    beforeEach(() => {
        validator = CreateRoleUseCase;
     });


    //// TEST

    // Define
    it('should define the function', () => {
        //Arrange
        //Act
        //Assert
        expect(validator).toBeDefined();
    });

    
    /* it('should return true', () => {
        //Arrange
        const value = "";
        const expected = true;
        //Act
        const result = validator(value);
        //Assert
        expect(result).toEqual(expected);
    });
 */
    

    //After every tests
    afterEach(() => {
        jest.clearAllMocks();
     });

    //After all tests
    afterAll(() => {
        jest.restoreAllMocks();
     })



})