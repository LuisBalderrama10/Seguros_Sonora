import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';
import { Aeronave_fabricante } from './aeronave_fabricante.entity';
import { Dependencia } from 'src/entities/dependencia.entity';
import { Siniestro } from 'src/siniestro/siniestro.entity';

@Entity()
export class Aeronave {
  @PrimaryGeneratedColumn()
  id_aeronave: number;

  @Column({type: 'varchar', length: 20, nullable: false})
  numero_serie: string;

  @ManyToOne(() => Aeronave_fabricante, aeronave_fabricante => aeronave_fabricante.aeronaves, {nullable:false})
  aeronave_fabricante: Aeronave_fabricante;

  @Column({type: 'varchar', length: 50, nullable: false})
  modelo: string;

  @Column({type: 'varchar', length: 50, nullable: false})
  tipo: string;

  @ManyToOne(() => Dependencia, dependencia => dependencia.aeronaves, { nullable: false})
  dependencia: Dependencia;
  
  @Column({type: 'varchar', length: 15, nullable: false})
  color: string;

  @Column({type: 'int', length: 20, nullable: false})
  numero_activo_sap: number;

  @OneToOne(() => Siniestro, siniestro => siniestro.aeronave, {nullable: false})
  siniestro: Siniestro[];

}