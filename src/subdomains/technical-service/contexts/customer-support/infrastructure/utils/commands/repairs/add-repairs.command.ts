import { IsBoolean, IsDate, IsString } from "class-validator";
import { IAddRepairsCommand } from "../../../../domain/interfaces";

export class AddRepairsCommand implements IAddRepairsCommand{
    @IsDate()
    repairDate?: Date;
    @IsString()
    repairID?: string ;
    @IsString()
    details?: string;   
    @IsBoolean()
    workFinished?: boolean;
}