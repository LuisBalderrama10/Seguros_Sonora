import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Aeronave } from './aeronave.entity';

@Entity()
export class Aeronave_fabricante {
  @PrimaryGeneratedColumn()
  id_fabricante_aeronave: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  @Column({type: 'varchar', length: 100, nullable: false})
  responsable: string;

  @OneToMany(() => Aeronave, aeronave => aeronave.aeronave_fabricante)
  aeronaves: Aeronave[];
}