import { Seguros } from './seguros.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Aseguradora {
  @PrimaryGeneratedColumn()
  id_aseguradora: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre_aseguradora: string;

  @OneToMany(() => Seguros, seguros => seguros.aseguradoras, {nullable: false})
  seguros: Seguros[];
}