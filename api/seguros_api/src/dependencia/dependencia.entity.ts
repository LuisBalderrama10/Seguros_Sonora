import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import {Institucion} from '../institucion/institucion.entity';
import { Aeronave } from 'src/aeronave/aeronave.entity';

@Entity()
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

  @ManyToMany(() => Institucion, institucion => institucion.dependencias)
  @JoinTable()
    institucion: Institucion[];

    @OneToMany(() => Aeronave, aeronave => aeronave.dependencia, {nullable: false})
    aeronaves: Aeronave[];
}
