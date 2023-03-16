import { EmployeeDomainEntityBase } from "../../entities/employee/employee.domain-entity";

export interface IEmployeeDomainService{

    CreateEmployee(employeeData: EmployeeDomainEntityBase) : Promise < EmployeeDomainEntityBase | null >; 

    ChangeEmployeeEmail(data: EmployeeDomainEntityBase) : Promise < boolean >;

    ChangeEmployeeStatus(data: EmployeeDomainEntityBase) : Promise < boolean >;

}