import { EventPublisherBase } from "@sofka";
import { CustomerDomainEntityBase } from "../../../entities/invoice";
export abstract class CustomerCreatedEventPublisherBase < Response = CustomerDomainEntityBase | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.customer-created',
            JSON.stringify({ data: this.response })
        )
    }
}