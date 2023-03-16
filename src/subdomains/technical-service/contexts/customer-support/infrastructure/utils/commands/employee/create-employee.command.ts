import { IsBoolean, IsString } from 'class-validator';
import { ICreateEmployeeCommand } from '../../../../domain/interfaces/commands/employee';


export class CreateEmployeeCommand implements ICreateEmployeeCommand{
    
    @IsString()    
    employeeID?: string;

    @IsString()    
    employeeName?: string;
    
    @IsString()
    employeeEmail?: string;

    @IsString()
    employeeRoleID?: string;

    @IsBoolean()
    employeeIsActive?: boolean;
}