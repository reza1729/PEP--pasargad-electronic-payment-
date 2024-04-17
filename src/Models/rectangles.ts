import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from "typeorm";
@Entity()
export class rectangle extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    x!: number;

    @Column()
    y!: number;

    @Column()
    width!: number;

    @Column()
    height!: number;

    @CreateDateColumn()
    time!: Date;

}
