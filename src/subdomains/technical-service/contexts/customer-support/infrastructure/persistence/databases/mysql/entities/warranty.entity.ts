import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WarrantyDomainEntityBase } from '../../../../../domain/entities/invoice/warranty.domain-entity/warranty.domain-entity';

@Entity('warranty')
export class WarrantyMySqlEntity extends WarrantyDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    warrantyID?: string;

    @Column()
    startDate?: Date; 

    @Column()
    warrantyStatus?: string;

    @Column()
    endDate?: Date;

    @CreateDateColumn()
    createdAt?: Date;

    @Column({default:null}) 
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;
}