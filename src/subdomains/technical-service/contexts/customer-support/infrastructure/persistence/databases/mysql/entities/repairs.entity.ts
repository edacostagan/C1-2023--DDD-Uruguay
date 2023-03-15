import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RepairsDomainEntityBase } from '../../../../../domain/entities/support-ticket/repairs.domain-entity/repairs.domain-entity';

@Entity('repairs')
export class RepairsMySqlEntity extends RepairsDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    repairID?: string;

    @Column()
    repairDate?: Date;

    @Column()
    details?: string;

    @Column({default:false})
    workFinished?: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @Column({default:null}) 
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;

}