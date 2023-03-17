import { EventPublisherBase } from "@sofka";

/**
 * Publish and event when a Role description is changed
 *
 * @export
 * @abstract
 * @class RoleDescriptionChangedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RoleDescriptionChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.role-description-changed',
            JSON.stringify({ data: this.response })
        )
    }
}