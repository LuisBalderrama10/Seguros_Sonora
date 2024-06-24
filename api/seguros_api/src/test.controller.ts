import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiculoEntity } from './vehiculo/vehiculo.entity'; 

@Controller('test')
export class TestController {
  constructor(
    @InjectRepository(VehiculoEntity)
    private vehiculoRepository: Repository<VehiculoEntity>,
  ) {}

  @Get('connection')
  async testConnection() {
    try {
      await this.vehiculoRepository.query('SELECT 1');
      return { message: 'Database connection is working' };
    } catch (error) {
      return { message: 'Error connecting to the database', error };
    }
  }
}