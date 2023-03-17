import { EventPublisherBase } from "@sofka";
import { EmployeeDomainEntityBase } from "../../../entities/employee/employee.domain-entity";


/**
 * Publish and event when a new employee is created
 *
 * @export
 * @abstract
 * @class EmployeeCreatedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class EmployeeCreatedEventPublisherBase < Response = EmployeeDomainEntityBase | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.employee-created',
            JSON.stringify({ data: this.response })
        )
    }
}