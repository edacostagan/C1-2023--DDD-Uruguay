import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when the warranty end date changes
 *
 * @export
 * @abstract
 * @class WarrantyEndDateChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class WarrantyEndDateChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.warranty-end-date-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
