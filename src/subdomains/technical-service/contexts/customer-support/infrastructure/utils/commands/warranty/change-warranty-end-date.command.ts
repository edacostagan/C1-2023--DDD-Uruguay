import { IsString, IsNumber, IsDate } from 'class-validator';
import { IChangeWarrantyEndDateCommand } from '../../../../domain/interfaces';

export class ChangeWarrantyEndDateCommand implements IChangeWarrantyEndDateCommand{
    @IsString()
    warrantyID: string;
    @IsDate()
    newEndDate: Date;    
}