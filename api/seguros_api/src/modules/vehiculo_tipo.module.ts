import { Module } from '@nestjs/common';
import { Vehiculo_tipoController } from 'src/controllers/vehiculo_tipo.controller';
import { VehiculoService } from 'src/services/vehiculo.service';
import { Vehiculo_TipoService } from 'src/services/vehiculo_tipo.service';

@Module({
    controllers: [Vehiculo_tipoController],
    providers: [Vehiculo_TipoService],
  })
export class VehiculoTipoModule {}
