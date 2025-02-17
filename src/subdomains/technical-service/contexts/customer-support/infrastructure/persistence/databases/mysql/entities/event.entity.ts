import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('event')
export class EventMySqlEntity {

    @PrimaryGeneratedColumn('uuid')
    eventID: string;
    
    @Column()
    type: string;

    @Column('longtext')
    data: string;

    @CreateDateColumn()
    createdAt: Date;
}