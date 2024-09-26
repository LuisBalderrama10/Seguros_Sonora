import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  /**llave foranea de dependencia */
  @Column({type: 'int', nullable: false})
  id_dependencia: number;

  /**llave foranea de rol */
  @Column({type: 'int', nullable: false})
  id_rol: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'bigint', nullable: false})
  telefono: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  responsable: string;

}