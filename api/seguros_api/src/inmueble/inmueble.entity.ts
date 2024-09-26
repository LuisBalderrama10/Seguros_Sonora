import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Tipo_inmueble } from './tipo_inmueble.entity';
import { Dependencia } from 'src/dependencia/dependencia.entity';
import { Siniestro } from 'src/siniestro/siniestro.entity';

@Entity()
export class Inmueble {
    @PrimaryGeneratedColumn()
    id_inmueble: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    direccion: string;

    //Llaves que requiere esta entidad
    @ManyToOne(() => Tipo_inmueble, tipo_inmueble => tipo_inmueble.inmuebles)
    tipo_inmueble: Tipo_inmueble[];

    @ManyToOne(() => Dependencia, dependencia => dependencia.inmuebles)
    dependencia: Dependencia[];

    @Column({type: 'varchar', length: 50, nullable:false})
    numero_activo_sap: string;

    @ManyToOne(() => Siniestro, siniestro => siniestro.inmuebles)
    siniestro: Siniestro[];

/*   

  @ManyToOne(() => Accidente_escolares, accidente_escolares => accidente_escolares.dependencia, {nullable: false})
  accidentes_escolares: Accidente_escolares[];
  */

/**me gusta el muralla10 */  
}