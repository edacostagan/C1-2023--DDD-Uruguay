import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when a Invoice is marked as paid
 *
 * @export
 * @abstract
 * @class InvoiceMarkedAsPaidEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class InvoiceMarkedAsPaidEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.invoice-marked-as-paid',
            JSON.stringify({ data: this.response })
        )
    }
}
