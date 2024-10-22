import { Dependencia } from './dependencia.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Accidente_escolares {
  @PrimaryGeneratedColumn()
  id_accescolar: number;

  @Column({type: 'date', nullable: false})
  fecha: Date;

  @ManyToOne(() => Dependencia, dependencia => dependencia.accidentes_escolares)
  dependencia: Dependencia[];
}