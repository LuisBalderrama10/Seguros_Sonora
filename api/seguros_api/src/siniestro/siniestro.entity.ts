import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Aeronave } from 'src/aeronave/aeronave.entity';
import { Tipo_Siniestro } from './siniestro_tipo.entity';

@Entity()
export class Siniestro {
  @PrimaryGeneratedColumn()
  id_siniestro: number;

  @ManyToMany(() => Tipo_Siniestro, tipo_siniestro => tipo_siniestro.siniestro)
  tipo_Siniestro: Tipo_Siniestro[];

  @Column({type: 'varchar', length: 100, nullable: false})
  fecha: Date;

  @Column({type: 'varchar', length: 300, nullable: false})
  descripcion: string;

  @Column({type: 'numeric', length: 10, nullable: false})
  monto_reclamado: number;

  @ManyToMany(() => Aeronave, aeronave => aeronave.siniestro)
    aeronave: Aeronave[];
}
