import { EventPublisherBase } from "@sofka";
import { IWarrantyDomainEntity } from "../../../entities/interfaces";


/**
 * Publish and event when a new warranty is added
 *
 * @export
 * @abstract
 * @class WarrantyAddedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class WarrantyAddedEventPublisherBase < Response = IWarrantyDomainEntity | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.warranty-added',
            JSON.stringify({ data: this.response })
        )
    }
}
