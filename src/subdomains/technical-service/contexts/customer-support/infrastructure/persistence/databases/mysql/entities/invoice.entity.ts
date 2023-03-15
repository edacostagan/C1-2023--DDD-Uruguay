import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { InvoiceDomainEntityBase } from '../../../../../domain/entities/invoice/';

@Entity('invoice')
export class InvoiceMySqlEntity extends InvoiceDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    invoiceID?: string;

    @Column()
    dateEmitted?:Date;

    @Column()
    ticketID?: string;

    @Column()
    customerID?: string;

    @Column()
    invoiceAmount?: number;

    @Column()
    warrantyID?: string;

    @Column({default: false})
    isPaid?: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}