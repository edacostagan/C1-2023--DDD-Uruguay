import { IsNumber, IsString, IsDate } from 'class-validator';
import { IAddWarrantyCommand } from "../../../../domain/interfaces";

export class AddWarrantyCommand implements IAddWarrantyCommand{
    @IsDate()
    startDate: Date;
    @IsDate()
    endDate: Date;
    @IsString()
    warrantyStatus: string;    
}