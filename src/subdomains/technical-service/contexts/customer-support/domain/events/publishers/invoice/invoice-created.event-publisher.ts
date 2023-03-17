import { EventPublisherBase } from "@sofka";
import { InvoiceDomainEntityBase } from "../../../entities/invoice/invoice.domain-entity";


/**
 * Publish and event when a new invoice is created
 *
 * @export
 * @abstract
 * @class InvoiceCreatedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class InvoiceCreatedEventPublisherBase < Response = InvoiceDomainEntityBase | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.invoice-created',
            JSON.stringify({ data: this.response })
        )
    }
}
