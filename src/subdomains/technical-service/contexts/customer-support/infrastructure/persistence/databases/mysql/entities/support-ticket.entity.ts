import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SupportTicketDomainEntityBase } from '../../../../../domain/entities/support-ticket/service-ticket.domain-entity';

@Entity('support-ticket')
export class SupportTicketMySqlEntity extends SupportTicketDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    ticketID?:  string;

    @Column()
    dateOpen?: Date;

    @Column()
    deviceID?:  string;

    @Column()
    repairsID?:  string;

    @Column()
    employeeID?:  string;

    @Column({default:true})
    isOpen?: boolean;

    @Column()
    dateClose?: Date;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()   
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;
}