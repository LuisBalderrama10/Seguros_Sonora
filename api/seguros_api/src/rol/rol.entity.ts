import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  nombre: string;
  
  @Column({type: 'varchar', length: 200, nullable: false})
  descripcion: string;
  
}