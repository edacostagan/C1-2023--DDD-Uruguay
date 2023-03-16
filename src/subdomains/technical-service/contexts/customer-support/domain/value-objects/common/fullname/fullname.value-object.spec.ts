import { IsValidFullname } from "@validations";
import { FullnameValueObject } from ".";

describe('FullnameValueObject', () => {

    let VO: FullnameValueObject;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
      //Arrange
      const value = "Firstname Lastname";  // valid name

      //Act
      VO = new FullnameValueObject(value);

     });


    //// TEST
    // Create
    it('should the VO be defined', () => {        
        //Assert
        expect(VO).toBeDefined();
    });


    it('checks if the value is a valid fullname VO', () => {                      
        //Arrange      
        const expected = true;

        //Act        
        const result = VO.valueOf();   

        //Assert
        expect(expected).toBe(IsValidFullname(result)); //using validation library
    })

 
    it(' should return False if the instance has not any errors', () =>{
        //Arrange
        const value = "Firstname Lastname";         // valid Name

        //Act
        const result = new FullnameValueObject(value);

        //Assert
        expect(result).toBeTruthy();

    })

    it(' should return true if the instance has any errors', () =>{
        //Arrange
        const value = "1nvalid N@me";                // incorrect fullname

        //Act
        const result = new FullnameValueObject(value);

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

