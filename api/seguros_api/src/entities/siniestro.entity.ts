import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne } from 'typeorm';
import { Aeronave } from './aeronave.entity';
import { Tipo_Siniestro } from './siniestro_tipo.entity';
import { Inmueble } from './inmueble.entity';
import { Vehiculo } from './vehiculo.entity';

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

  @Column({type: 'numeric', nullable: false})
  monto_reclamado: number;

  //Llaves que necesitan de siniestro
  @ManyToMany(() => Aeronave, aeronave => aeronave.siniestro)
    aeronave: Aeronave[];

    @OneToMany(() => Inmueble, inmuebles => inmuebles.siniestro)
    inmuebles: Inmueble[];

    @OneToOne(() => Vehiculo, vehiculo => vehiculo.siniestro, {nullable: false})
    vehiculo: Vehiculo[];
}
