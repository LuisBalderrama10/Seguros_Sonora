import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import {Institucion} from './institucion.entity';
import { Aeronave } from 'src/aeronave/aeronave.entity';
import { Accidente_escolares } from 'src/entities/accidentes_escolares.entity';
import { Inmueble } from 'src/inmueble/inmueble.entity';
import { Vehiculo } from 'src/vehiculo/vehiculo.entity';
import { Seguros } from 'src/seguros/seguros.entity';


export class Dependencia {
  @PrimaryGeneratedColumn()
  id_dependencia: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  @Column({type: 'varchar', nullable: false})
  direccion: string;

  @Column({type: 'int', length: 10})
  telefono: number;
  
  @Column({type: 'varchar', length: 100})
  email: string;

  @Column({type: 'varchar', length: 100, nullable: false})
  responsable: string;

//Llaves que requerimos en esta entidad
  @ManyToMany(() => Institucion, institucion => institucion.dependencias)
  @JoinTable()
    institucion: Institucion[];

//Llaves que requerien de esta entidad
  @OneToMany(() => Aeronave, aeronaves => aeronaves.dependencia, {nullable: false})
  aeronaves: Aeronave[];

  @ManyToOne(() => Accidente_escolares, accidente_escolares => accidente_escolares.dependencia, {nullable: false})
  accidentes_escolares: Accidente_escolares[];

  @OneToMany(() => Inmueble, inmuebles => inmuebles.dependencia, {nullable: false})
  inmuebles: Inmueble[];

  @OneToMany(() => Vehiculo, vehiculos => vehiculos.dependencia, {nullable: false})
  vehiculos: Vehiculo[];

  @OneToMany(() => Seguros, seguros => seguros.dependencia, {nullable: false})
  seguros: Seguros[];

}
