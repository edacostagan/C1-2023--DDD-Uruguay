import { IsBoolean, IsString, IsDate } from 'class-validator';
import { IOpenNewTicketCommand } from "../../../../domain/interfaces";

export class OpenNewTicketCommand implements IOpenNewTicketCommand{
    @IsString()
    ticketID?: string;
    @IsDate()
    openDate?: Date;
    @IsString()
    deviceID?: string; 
    @IsString()
    repairsID?: string; 
    @IsString()
    employeeID?: string;     
    @IsBoolean()
    isOpen?: boolean;
    @IsDate()
    dateClose?: Date;

}
