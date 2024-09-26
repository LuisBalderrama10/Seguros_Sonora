import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class seg_rc_usa {
  @PrimaryGeneratedColumn()
  id_seguro: number;

    /**llave foranea de tipo_seguro */
  @Column({type: 'int', nullable: false})
  id_tipo_seguro: number;

    /**llave foranea de poliza */
  @Column({type: 'int', nullable: false})
  id_poliza: number;

    /**llave foranea de aseguradoras */
  @Column({type: 'int', nullable: false})
  id_aseguradora: number;

  @Column({type: 'date', nullable: false})
  fecha_inicio: Date;

  @Column({type: 'date', nullable: false})
  fecha_fin: Date;

  @Column({type: 'int', nullable: false})
  monto_cobertura: number;

    /**llave foranea de dependencias */
  @Column({type: 'int', nullable: false})
  id_dependencia: number;
  
}