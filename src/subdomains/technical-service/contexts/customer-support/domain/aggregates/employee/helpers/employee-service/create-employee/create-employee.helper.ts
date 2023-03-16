import { EmployeeDomainEntityBase } from "../../../../../entities/employee/employee.domain-entity";
import { EmployeeCreatedEventPublisherBase } from "../../../../../events/publishers/employee";
import { IEmployeeDomainService } from "../../../../../services/employee";

export const CreateEmployee = async (
    employeeData: EmployeeDomainEntityBase,
    employeeService: IEmployeeDomainService,
    employeeCreatedEventPublisherBase: EmployeeCreatedEventPublisherBase
): Promise< EmployeeDomainEntityBase | null > => {

    const result = await employeeService.CreateEmployee(employeeData);
    employeeCreatedEventPublisherBase.response = result;
    employeeCreatedEventPublisherBase.publish();

    return result;
}