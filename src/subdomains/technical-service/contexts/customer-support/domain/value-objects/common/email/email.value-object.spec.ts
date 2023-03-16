import { IsEmail } from "./../../../../../../../../libs/validations";
import { EmailValueObject } from ".";

describe('EmailValueObject', () => {

    let VO: EmailValueObject;

    //Before all tests
    beforeAll(() => { });

    //Before every tests
    beforeEach(() => {
      //Arrange
      const value = "test@domain.com";         // valid email value

      //Act
      VO = new EmailValueObject(value);

     });


    //// TEST
    // Create
    it('should the VO be defined', () => {        
        //Assert
        expect(VO).toBeDefined();
    });


    it('checks if the value is a valid email instance', () => {                      
        //Arrange      
        const expected = true;

        //Act        
        const result = VO.valueOf();   

        //Assert
        expect(expected).toBe(IsEmail(result)); //using validation library
    })

 
    it(' should return False if the instance has not any errors', () =>{
        //Arrange
        const value = "test@domain.com";         // valid email value

        //Act
        const result = new EmailValueObject(value);

        //Assert
        expect(result).toBeTruthy();

    })

    it(' should return true if the instance has any errors', () =>{
        //Arrange
        const value = "test@domain";                // incorrect email value

        //Act
        const result = new EmailValueObject(value);

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

