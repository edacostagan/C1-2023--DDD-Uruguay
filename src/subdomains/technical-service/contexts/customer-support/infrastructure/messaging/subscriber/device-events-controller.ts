import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { EventMySqlEntity, EventRepository } from "../../persistence";


@Controller()
export class DeviceEventsController{

    constructor(
        private readonly eventRepository: EventRepository
    ){ }

    @EventPattern('customer-support.device-added')
    deviceAdded(@Payload() data: any, @Ctx() context: KafkaContext){

        this.registerEvent(context.getTopic(),  JSON.stringify(data));

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context.getTopic())
        console.log('--------------------------------------')

    }   

    /**
     * registers the event in DB
     *
     * @private
     * @param {string} sender
     * @param {*} data
     * @memberof RoleEventsController
     */
    private async registerEvent(sender: string, data: string) {
        let event = new EventMySqlEntity();
        event.data = data;
        event.type = sender;
        event.createdAt = new Date();

        await this.eventRepository.create(event);
    }
}