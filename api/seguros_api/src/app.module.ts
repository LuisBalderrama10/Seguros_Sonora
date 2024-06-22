import { Module } from '@nestjs/common';
import { VehiculoController } from './vehiculo/vehiculos.controller';
import { VehiculoServicio } from './vehiculo/vehiculos.services';
import { AseguradoraController } from './aseguradora/aseguradora.controllers';
import { AseguradoraServicio } from './aseguradora/aseguradoras.services';

@Module({
  imports: [],
  controllers: [VehiculoController, AseguradoraController],
  providers: [VehiculoServicio, AseguradoraServicio],
})
export class AppModule {}
