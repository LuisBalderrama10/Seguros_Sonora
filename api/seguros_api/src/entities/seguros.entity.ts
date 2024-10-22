import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tipo_seguro } from './seguro_tipo.entity';
import { Poliza } from './poliza.entity';
import { Aseguradora } from './aseguradora.entity';
import { Dependencia } from './dependencia.entity';

@Entity()
export class Seguros {
  @PrimaryGeneratedColumn()
  id_seguro: number;

    /**llave foranea de tipo_seguro */
  @ManyToOne(() => Tipo_seguro, tipo_seguro => tipo_seguro.seguros, {nullable: false})
  tipo_seguro: Tipo_seguro[];

    /**llave foranea de polizas */
    @ManyToOne(() => Poliza, polizas => polizas.seguros, {nullable: false})
    polizas: Poliza[];

    /**llave foranea de aseguradoras */
    @ManyToOne(() => Aseguradora, aseguradoras => aseguradoras.seguros, {nullable: false})
    aseguradoras: Aseguradora[];

  @Column({type: 'date', nullable: false})
  fecha_inicio: Date;

  @Column({type: 'date', nullable: false})
  fecha_fin: Date;

  @Column({type: 'int', nullable: false})
  monto_cobertura: number;
  
    /**llave foranea de dependencia */
    @ManyToOne(() => Dependencia, dependencia => dependencia.seguros, {nullable: false})
    dependencia: Dependencia[];

  @Column({type: 'int', nullable: false})
  id_dependencia: number;

}