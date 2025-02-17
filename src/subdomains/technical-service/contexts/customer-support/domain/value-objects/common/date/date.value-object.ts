import { ValueObjectBase } from '@sofka';
import { IsValidDate, IsEmptyOrNull } from '@validations';

export class DateValueObject extends ValueObjectBase< Date > {

    constructor(value?: Date) {
        super(value ? value : null)
    }

    /**
     * checks that the VO data is valid
     *
     * @memberof DateValueObject
     */
    validateData(): void {
        this.validateContent();     
        this.isValidDate();   
    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * maximum length
     *
     * @private
     * @memberof DateValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value)) {

            const error = {
                field: 'Date',
                message: 'Not Date value was given!'
            };

            this.setError(error);
        }
    }   

     /**
     * Validates the structure of the value object given
     * It must be a valid Date
     * 
     * @private
     * @memberof DateValueObject
     */
     private isValidDate(): void {

        if (this.value && IsValidDate(this.value)) {

            const error = {
                field: 'Date',
                message: `${this.value} is not a valid date`
            };

            this.setError(error);
        }
    }

}