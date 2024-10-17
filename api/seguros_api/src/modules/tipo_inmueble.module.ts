import { Module } from '@nestjs/common';
import { Tipo_inmuebleController } from 'src/controllers/tipo_inmueble.controller';
import { Tipo_inmuebleService } from 'src/services/tipo_inmueble.service';

@Module({
    controllers: [Tipo_inmuebleController],
    providers: [Tipo_inmuebleService],
  })
export class TipoInmuebleModule {}
