import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';
import { Vehiculo } from './vehiculo.entity';

@Entity()
export class Marca_vehiculo {
    @PrimaryGeneratedColumn()
    Id_marca: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    nombre: string;

    //Llaves que necesitan de esta entidad
    @OneToOne(() => Vehiculo, vehiculo => vehiculo.marca_vehiculo, {nullable: false})
    vehiculo: Vehiculo[];


}