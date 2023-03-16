import { EmailValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/email/email.value-object';

export const IsEmail = (value: string ): boolean => {

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(value);
}