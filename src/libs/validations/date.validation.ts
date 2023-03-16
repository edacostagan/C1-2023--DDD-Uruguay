import { type } from 'os';
import { DateValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/date/date.value-object';

export const IsValidDate = (value: Date): boolean => {

    
    if(value instanceof Date)
    {
        return true
    }  
    
    return false;
}
