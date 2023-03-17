import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when the employee email is changed
 *
 * @export
 * @abstract
 * @class EmployeeEmailChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class EmployeeEmailChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.employee-email-changed',
            JSON.stringify({ data: this.response })
        )
    }
}