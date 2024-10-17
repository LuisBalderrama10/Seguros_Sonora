import { Module } from '@nestjs/common';
import { VehiculoController } from 'src/controllers/vehiculo.controller';
import { VehiculoService } from 'src/services/vehiculo.service';

@Module({
    controllers: [VehiculoController],
    providers: [VehiculoService],
  })
export class VehiculoModule {}
