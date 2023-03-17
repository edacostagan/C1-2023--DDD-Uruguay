import { EventPublisherBase } from "@sofka";

/**
 * Publish and event when new repair details are added
 *
 * @export
 * @abstract
 * @class RepairsAddedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RepairsAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.repairs-added',
            JSON.stringify({ data: this.response })
        )
    }
}
