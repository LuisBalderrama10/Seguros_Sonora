import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany } from 'typeorm';
import { Marca_vehiculo } from './vehiculo_marca.entity';
import { Tipo_vehiculo } from './vehiculo_tipo.entity';
import { Dependencia } from 'src/dependencia/dependencia.entity';
import { Siniestro } from 'src/siniestro/siniestro.entity';

export class Vehiculo {
  @PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Column({ type: 'varchar', length: 50 })
  numero_serie: string;

//Llaves que necesita la entidad
  @OneToOne(() => Marca_vehiculo, marca_vehiculo => marca_vehiculo.vehiculo, {nullable: false})
    marca_vehiculo: Marca_vehiculo[];

  @Column({ type: 'int' })
  modelo: number;

  @OneToOne(() => Tipo_vehiculo, tipo_vehiculo => tipo_vehiculo.vehiculo, {nullable: false})
    tipo_vehiculo: Tipo_vehiculo[];

  @Column({ type: 'varchar', length: 20, unique: true })
  placas: string;

  @ManyToOne(() => Dependencia, dependencia => dependencia.vehiculos, {nullable: false})
  dependencia: Dependencia[];

  @Column({ type: 'varchar', length: 20 })
  color: string;

  @Column({ type: 'int', length: 2 })
  numero_cilindros: number;

  @Column({ type: 'varchar', length: 50 })
  numero_activo_sap: string;

  //id_siniestro

  @OneToOne(() => Siniestro, siniestro => siniestro.vehiculo, {nullable: false})
  siniestro: Siniestro[];
  
  //Llaves que necesitan de la entidad

  /*
    @OneToMany(() => Aeronave, aeronave => aeronave.dependencia, {nullable: false})
  aeronaves: Aeronave[];

  @ManyToOne(() => Accidente_escolares, accidente_escolares => accidente_escolares.dependencia, {nullable: false})
  accidentes_escolares: Accidente_escolares[];

  @OneToMany(() => Inmueble, inmuebles => inmuebles.dependencia, {nullable: false})
  inmuebles: Inmueble[];
  */
}