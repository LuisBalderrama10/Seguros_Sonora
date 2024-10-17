import { Module } from '@nestjs/common';
import { Seguro_tipoController } from 'src/controllers/seguro_tipo.controller';
import { Seguro_TipoService } from 'src/services/seguro_tipo.service';

@Module({
    controllers: [Seguro_tipoController],
    providers: [Seguro_TipoService],
  })
export class SeguroTipoModule {}
