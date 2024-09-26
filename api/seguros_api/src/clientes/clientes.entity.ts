import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;

  @Column({type: 'varchar', nullable: false})
  direccion: string;

  @Column({type: 'int', length: 10,  nullable: false})
  telefono: number;
  
  @Column({type: 'varchar', length: 100, nullable: false})
  email: string;

  @Column({type: 'date', nullable: false})
  fecha_registro: Date;
}
