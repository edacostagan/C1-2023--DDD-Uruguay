import { EventPublisherBase } from "@sofka";
import { IRoleDomainEntity } from "../../../../entities/interfaces";


/**
 * Publish and event when a new role is created
 *
 * @export
 * @abstract
 * @class RoleCreatedEventPublisherBase
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RoleCreatedEventPublisherBase < Response = IRoleDomainEntity | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.role-created',
            JSON.stringify({ data: this.response })
        )
    }
}