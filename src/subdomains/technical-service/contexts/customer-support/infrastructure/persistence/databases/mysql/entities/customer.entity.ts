import { CustomerDomainEntityBase } from "src/subdomains/technical-service/contexts/customer-support/domain/entities/invoice";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('customer')
export class CustomerMySqlEntity extends CustomerDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    customerID?: string; 

    @Column()
    customerName?: string;

    @Column()
    customerEmail?: string;

    @Column()
    customerPhone?: string;

    @CreateDateColumn()
    createdAt?: Date;

    @Column({default:null})   
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;

    
}