import { Module } from '@nestjs/common';
import { VehiculoController } from './vehiculo/vehiculo.controller';
import { VehiculoServicio } from './vehiculo/vehiculos.services';

@Module({
  imports: [],
  controllers: [VehiculoController],
  providers: [VehiculoServicio],
})
export class AppModule {}
