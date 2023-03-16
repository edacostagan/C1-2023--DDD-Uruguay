import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SupportTicketDomainEntityBase } from '../../../../../domain/entities/support-ticket/service-ticket.domain-entity';

@Entity('support-ticket')
export class SupportTicketMySqlEntity extends SupportTicketDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    ticketID?:  string;

    @Column({default:null})
    dateOpen?: Date;

    @Column()
    deviceID?:  string;

    @Column()
    repairsID?:  string;

    @Column()
    employeeID?:  string;

    @Column({default:true})
    isOpen?: boolean;

    @Column({default:null})
    dateClose?: Date;

    @CreateDateColumn()
    createdAt?: Date;

    @Column({default:null})
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;
}