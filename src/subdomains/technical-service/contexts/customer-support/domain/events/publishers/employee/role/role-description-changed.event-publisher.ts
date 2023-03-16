import { EventPublisherBase } from "@sofka";
export abstract class RoleDescriptionChangedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.role-description-changed',
            JSON.stringify({ data: this.response })
        )
    }
}