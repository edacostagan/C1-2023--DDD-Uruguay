import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from '@sofka';

import { IRepairsDetailsAddedResponse, IAddRepairsCommand } from "../../../../domain/interfaces";

import { IRepairsDomainEntity } from '../../../../domain/entities/interfaces/support-ticket/repairs.domain-entity.interface';

import { TrueFalseValueObject, NoteValueObject, UUIDValueObject, DateValueObject} from '../../../../domain/value-objects/';


import { RepairsDomainEntityBase } from '../../../../domain/entities/support-ticket/repairs.domain-entity/repairs.domain-entity';
import { SupportTicketAggregate } from '../../../../domain/aggregates';
import { IRepairsDomainService } from '../../../../domain/services';
import { RepairsAddedEventPublisherBase } from '../../../../domain/events/publishers/support-ticket/repairs/repairs-added.event-publisher';


export class AddRepairDetailsUseCase<
    Command extends IAddRepairsCommand = IAddRepairsCommand,
    Response extends IRepairsDetailsAddedResponse = IRepairsDetailsAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {

    private readonly supportTicketAggregateRoot: SupportTicketAggregate;

    constructor(
        private readonly repairsService: IRepairsDomainService,
        private readonly repairsAddedEventPublisherBase: RepairsAddedEventPublisherBase
    ) {
        super();
        this.supportTicketAggregateRoot = new SupportTicketAggregate({
            repairsService,
            repairsAddedEventPublisherBase
        })
    }


    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        return { success: data ? true : false, data } as unknown as Response;
    }

    /**
     * executes all the steps needed to make a new entity
     *
     * @private
     * @param {Command} command
     * @memberof AddRepairDetailsUseCase
     */
    private executeCommand(command: Command) {

        const VO = this.createValueObject(command);

        //TODO: Reactivar esto ->          this.validateValueObject(VO);

        const entity = this.createRepairEntity(VO);

        return this.executeAddRepairDetailsAggregateRoot(entity);
    }



    /**
     * Generates a Repairs entity type with only the needed values (Repair Details)
     *
     * @template Command
     * @param {Command} command
     * @memberof AddRepairDetailsUseCase
     */

    createValueObject(command: Command): IRepairsDomainEntity {

        const repairID = new UUIDValueObject(command.repairID);
        const repairDate = new DateValueObject(command.repairDate);
        const details = new NoteValueObject(command.details);        
        const workFinished = new TrueFalseValueObject(command.workFinished);

        return {
            repairID,
            repairDate,
            details,
            workFinished
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IRepairsDomainEntity} VO
     * @memberof AddRepairDetailsUseCase
     */
    validateValueObject(VO: IRepairsDomainEntity) {
        const {
            repairID,
            repairDate,
            details,
            workFinished
        } = VO;

        // validates repairID
        if (repairID instanceof UUIDValueObject && repairID.hasErrors())
            this.setErrors(repairID.getErrors());

        // validates repairDate
        if (repairDate instanceof DateValueObject && repairDate.hasErrors())
            this.setErrors(repairDate.getErrors());

        // validates details
        if (details instanceof NoteValueObject && details.hasErrors())
            this.setErrors(details.getErrors());

        // validates workFinished
        if (workFinished instanceof TrueFalseValueObject && workFinished.hasErrors())
            this.setErrors(workFinished.getErrors());


        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'AddRepairDetailsUseCase command execution return some errors!',
                this.getErrors(),
            );
    }


    /**
     * Creates and returns a new Repairs Entity with only the needed info
     *
     * @param {IRepairsDomainEntity} VO
     * @return {*}  {RepairsDomainEntityBase}
     * @memberof AddRepairDetailsUseCase
     */
    createRepairEntity(VO: IRepairsDomainEntity): RepairsDomainEntityBase {
        const {
            repairID,
            repairDate,
            details,
            workFinished
        } = VO;

        return new RepairsDomainEntityBase({
            repairID: repairID.valueOf(),
            repairDate: repairDate.valueOf() as Date,            
            details: details.valueOf(),
            workFinished: workFinished.valueOf(),
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @param {RepairsDomainEntityBase} entity
     * @memberof AddRepairDetailsUseCase
     */
    executeAddRepairDetailsAggregateRoot(
        entity: RepairsDomainEntityBase): Promise<boolean> {

        return this.supportTicketAggregateRoot.AddRepair(entity);
    }


}
