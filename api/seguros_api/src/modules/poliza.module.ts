import { Module } from '@nestjs/common';
import { PolizaController } from 'src/controllers/poliza.controller';
import { PolizaService } from 'src/services/poliza.service';

@Module({
    controllers: [PolizaController],
    providers: [PolizaService],
  })
export class PolizaModule {}
