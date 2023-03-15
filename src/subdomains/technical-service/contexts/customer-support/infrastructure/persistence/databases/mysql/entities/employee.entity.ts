import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EmployeeDomainEntityBase } from '../../../../../domain/entities/employee/employee.domain-entity';

@Entity('employee')
export class EmployeeMySqlEntity extends EmployeeDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    employeeID: string;

    @Column()
    employeeName: string; 
    
    @Column()
    employeeEmail: string;

    @Column()
    employeeRoleId: string;

    @Column({default: true})
    employeeIsActive: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @Column({default:null})
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;
}