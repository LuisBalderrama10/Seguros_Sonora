import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Dependencia } from 'src/dependencia/dependencia.entity';

@Entity()
export class Institucion {
  @PrimaryGeneratedColumn()
  id_institucion: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  @Column({type: 'varchar', nullable: false})
  direccion: string;

  @ManyToMany(() => Dependencia, dependencia => dependencia.institucion)
    dependencias: Dependencia[];
}
