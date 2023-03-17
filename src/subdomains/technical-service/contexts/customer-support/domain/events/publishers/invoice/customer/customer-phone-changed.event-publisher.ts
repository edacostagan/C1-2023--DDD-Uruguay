import { EventPublisherBase } from "@sofka";

/**
 * Publish and event when the customer phone changes
 *
 * @export
 * @abstract
 * @class CustomerPhoneChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class CustomerPhoneChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-phone-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
