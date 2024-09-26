import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Siniestro } from './siniestro.entity'  

@Entity()
export class Tipo_Siniestro {
  @PrimaryGeneratedColumn()
  id_tipo_siniestro: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  @ManyToMany(() => Siniestro, siniestro => siniestro.tipo_Siniestro)
  siniestro: Siniestro[];

}
