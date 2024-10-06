import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Seguros } from './seguros.entity';

@Entity()
export class Tipo_seguro {
  @PrimaryGeneratedColumn()
  id_tipo_seguro: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  @OneToMany(() => Seguros, seguros => seguros.tipo_seguro, {nullable: false})
  seguros: Seguros[];
}