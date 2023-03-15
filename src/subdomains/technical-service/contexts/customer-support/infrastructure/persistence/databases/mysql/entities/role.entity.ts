import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RoleDomainEntityBase } from '../../../../../domain/entities/employee/role.domain-entity/role.domain-entity';

@Entity('role')
export class RoleMySqlEntity extends RoleDomainEntityBase{

    @PrimaryGeneratedColumn('uuid')
    roleID?: string;

    @Column()
    roleName?: string;

    @Column()
    roleDescription?: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()   
    updatedAt?: Date;    

    @DeleteDateColumn()
    deletedAt?: Date;
}
