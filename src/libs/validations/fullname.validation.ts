import { FullnameValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/fullname/fullname.value-object';
export const IsValidFullname = (value: string): boolean => {

    let validName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    return validName.test(value as string);

    /* const dataToEvaluate = value as string;
    
    //checks if first char is a letter
    if (onlyLetters.test(dataToEvaluate.charAt(0))) {
        return true;
    }
    return false; */
}