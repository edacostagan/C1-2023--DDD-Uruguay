import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { DeviceDomainEntityBase } from '../../../../../domain/entities/support-ticket/';

@Entity('device')
export class DeviceMySqlEntity extends DeviceDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    deviceID?: string;

    @Column()
    deviceType?: string;

    @Column()
    issues?: string;
    
    @CreateDateColumn()
    createdAt?: Date;

    @Column({default:null})   
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;

}