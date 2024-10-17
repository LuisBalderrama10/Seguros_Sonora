import { Module } from '@nestjs/common';
import { Vehiculo_marcaController } from 'src/controllers/vehiculo_marca.controller';
import { VehiculoMarcaService } from 'src/services/vehiculo_marca.service';

@Module({
    controllers: [Vehiculo_marcaController],
    providers: [VehiculoMarcaService],
  })
export class VehiculoMarcaModule {}
