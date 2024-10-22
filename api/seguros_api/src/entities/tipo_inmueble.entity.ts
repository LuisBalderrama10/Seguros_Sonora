import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Inmueble } from './inmueble.entity';

@Entity()
export class Tipo_inmueble {
  @PrimaryGeneratedColumn()
  id_inmueble: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  //Llaves que requieren de esta entidad
  @ManyToOne(() => Inmueble, inmuebles => inmuebles.tipo_inmueble)
    inmuebles: Inmueble[];

    /*@OneToMany(() => Dependencia, dependencia => dependencia.tipo_inmueble, {nullable: false})
  dependencia:  Dependencia[];
*/
}