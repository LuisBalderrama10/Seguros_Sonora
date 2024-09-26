import { Seguros } from 'src/seguros/seguros.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne} from 'typeorm';
import { Ramo_poliza } from './poliza.ramo.entity';

@Entity()
export class Poliza {
  @PrimaryGeneratedColumn()
  id_poliza: number;

  @Column({type: 'varchar', length: 50, nullable: false})
  numero_poliza: string;

  /**llave foranea de ramo_poliza */
  @OneToOne(() => Ramo_poliza, ramo_poliza => ramo_poliza.poliza, {nullable: false})
  ramo_poliza: Ramo_poliza[];

  @Column({type: 'int', nullable: false})
  id_ramo_poliza: number;

  @OneToMany(() => Seguros, seguros => seguros.polizas, {nullable: false})
  seguros: Seguros[];
  
  @Column({type: 'varchar', length: 200, nullable: false})
  descripcion: string;

}