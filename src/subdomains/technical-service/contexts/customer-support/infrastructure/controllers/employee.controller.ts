import { Controller } from "@nestjs/common";
import { EmployeeService } from '../persistence/services/employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(
        private readonly employeeService: EmployeeService,
        // private readonly 

    ){}


    
}