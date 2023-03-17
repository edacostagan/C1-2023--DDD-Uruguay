import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when the customer email is changed
 *
 * @export
 * @abstract
 * @class CustomerEmailChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class CustomerEmailChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-email-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
