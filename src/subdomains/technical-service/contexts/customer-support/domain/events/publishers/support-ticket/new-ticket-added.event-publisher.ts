import { EventPublisherBase } from "@sofka";
import { ISupportTicketEntity } from "../../../entities/interfaces";


/**
 * Publish and event when a new support ticket is created
 *
 * @export
 * @abstract
 * @class NewTicketAddedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class NewTicketAddedEventPublisherBase < Response = ISupportTicketEntity | null  > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.new-ticket-added',
            JSON.stringify({ data: this.response })
        )
    }
}
