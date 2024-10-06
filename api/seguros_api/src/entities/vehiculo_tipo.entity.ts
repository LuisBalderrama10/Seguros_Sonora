import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';
import { Vehiculo } from './vehiculo.entity';

@Entity()
export class Tipo_vehiculo {
    @PrimaryGeneratedColumn()
    Id_tipo_vehiculo: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    nombre: string;

    @OneToOne(() => Vehiculo, vehiculo => vehiculo.tipo_vehiculo, {nullable: false})
    vehiculo: Vehiculo[];
}