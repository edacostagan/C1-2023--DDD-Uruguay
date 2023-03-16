
import { IWarrantyStatusChangedResponse, IChangeWarrantyStatusCommand } from '../../../../domain/interfaces';

import { InvoiceAggregate } from '../../../../domain/aggregates/Invoice';

import { IWarrantyDomainService } from '../../../../domain/services/invoice';

import { WarrantyStatusChangedEventPublisherBase } from '../../../../domain/events/publishers/invoice/warranty';

import { IWarrantyDomainEntity } from '../../../../domain/entities/interfaces/invoice';

import { UUIDValueObject, WarrantyStatusValueObject } from '../../../../domain/value-objects';

import { ValueObjectException, ValueObjectErrorHandler, IUseCase } from '@sofka';

import { WarrantyDomainEntityBase } from '../../../../domain/entities/invoice/warranty.domain-entity';
import { NoteValueObject } from '../../../../domain/value-objects/common/note/note.value-object';



export class ChangeWarrantyStatusUseCase<
    Command extends IChangeWarrantyStatusCommand = IChangeWarrantyStatusCommand,
    Response extends IWarrantyStatusChangedResponse = IWarrantyStatusChangedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly warrantyService: IWarrantyDomainService,
        private readonly warrantyStatusChangedEventPublisherBase: WarrantyStatusChangedEventPublisherBase
    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            warrantyService,
            warrantyStatusChangedEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        return { success: data ? true : false, data } as unknown as Response;
    }

    /**
     * executes all the steps needed to make a new entity
     *
     * @param {Command} command
     * @return {*}  {Promise <boolean>}
     * @memberof ChangeWarrantyStatusUseCase
     */
    executeCommand(command: Command): Promise<boolean> {

        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createWarrantyEntity(VO);

        return this.executeChangeWarrantyStatusAggregateRoot(entity);
    }

    /**
     * Generates a Warranty entity type with only the needed values (warrantyStatus)
     *
     * @param {Command} command
     * @return {*}  {IWarrantyDomainEntity}
     * @memberof ChangeWarrantyStatusUseCase
     */
    createValueObject(command: Command): IWarrantyDomainEntity {

        const warrantyID = new UUIDValueObject(command.warrantyID);
        const warrantyStatus = command.warrantyStatus;
        const warrantyReason = new NoteValueObject(command.warrantyReason);

        return {
            warrantyID,
            warrantyStatus,
            warrantyReason
        }
    }


    /**
     * Checks that the information of the newly created VO is valid
     *
     * @param {IWarrantyDomainEntity} VO
     * @memberof ChangeWarrantyStatusUseCase
     */
    validateValueObject(VO: IWarrantyDomainEntity) {

        const {
            warrantyID,
            warrantyStatus,
            warrantyReason

        } = VO;

        // validates warrantyID
        if (warrantyID instanceof UUIDValueObject && warrantyID.hasErrors())
            this.setErrors(warrantyID.getErrors());

        // validates warrantyStatus
        if (warrantyStatus instanceof WarrantyStatusValueObject && warrantyStatus.hasErrors())
            this.setErrors(warrantyStatus.getErrors());

        // validates warrantyReason
        // if (warrantyReason instanceof NoteValueObject && warrantyReason.hasErrors())
        // this.setErrors(warrantyReason.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'ChangeWarrantyStatusUseCase command execution return some errors!',
                this.getErrors(),
            );
    }


    /**
     * Creates and returns a new Warranty Entity with only the needed info
     *
     * @param {IWarrantyDomainEntity} VO
     * @return {*}  {WarrantyDomainEntityBase}
     * @memberof ChangeWarrantyStatusUseCase
     */
    createWarrantyEntity(VO: IWarrantyDomainEntity): WarrantyDomainEntityBase {

        const {
            warrantyID,
            warrantyStatus, 
            warrantyReason
        } = VO;

        return new WarrantyDomainEntityBase({
            warrantyID: warrantyID.valueOf(),
            warrantyStatus: warrantyStatus.valueOf() as string,
            warrantyReason: warrantyReason.valueOf()
        })
    }


    /**
     * Executes the method on the aggregate
     * 
     *
     * @param {WarrantyDomainEntityBase} entity
     * @return {*}  {Promise<boolean>}
     * @memberof ChangeWarrantyStatusUseCase
     */
    executeChangeWarrantyStatusAggregateRoot(
        entity: WarrantyDomainEntityBase): Promise<boolean> {

        return this.invoiceAggregateRoot.ChangeWarrantyStatus(entity);
    }
}