import { EventPublisherBase } from "@sofka";

/**
 * Publish and event when the employee status changes
 *
 * @export
 * @abstract
 * @class EmployeeStatusChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class EmployeeStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.employee-status-changed',
            JSON.stringify({ data: this.response })
        )
    }
}