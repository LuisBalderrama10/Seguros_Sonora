import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehiculos')
export class VehiculoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  marca: string;

  @Column({ type: 'varchar', length: 100 })
  modelo: string;

  @Column({ type: 'int' })
  anio: number;

  @Column({ type: 'varchar', length: 100 })
  color: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  numeroSerie: string;

  @Column({ type: 'varchar', length: 50 })
  tipo: string;

  @Column({ type: 'varchar', length: 100 })
  aseguradora: string;

  @Column({ type: 'date' })
  fechaRegistro: Date;
}