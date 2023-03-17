import { UUIDValueObject } from "../../subdomains/technical-service/contexts/customer-support/domain/value-objects";


export const IsUUID = (value: string | UUIDValueObject): boolean => {


    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    return regex.test(value as string);
    
}