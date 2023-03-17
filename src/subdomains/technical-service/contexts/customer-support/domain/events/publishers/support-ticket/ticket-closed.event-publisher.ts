import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when a support ticket is closed
 *
 * @export
 * @abstract
 * @class SupportTicketClosedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class SupportTicketClosedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.ticket-closed',
            JSON.stringify({ data: this.response })
        )
    }
}
