import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { Poliza } from './poliza.entity';

@Entity()
export class Ramo_poliza {
  @PrimaryGeneratedColumn()
  id_ramo_poliza: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;
  
  @Column({type: 'varchar', length: 200, nullable: false})
  descripcion: string;

  @OneToOne(() => Poliza, poliza => poliza.ramo_poliza, {nullable: false})
  poliza: Poliza[];

}