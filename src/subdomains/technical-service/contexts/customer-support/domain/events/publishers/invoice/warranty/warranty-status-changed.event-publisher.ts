import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when the warranty status changes
 *
 * @export
 * @abstract
 * @class WarrantyStatusChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class WarrantyStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.warranty-status-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
