import { EventPublisherBase } from "@sofka";


/**
 * Publish and event when the work status has changed
 *
 * @export
 * @abstract
 * @class WorkStatusChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class WorkStatusChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.work-status-changed',
            JSON.stringify({ data: this.response })
        )
    }
}
