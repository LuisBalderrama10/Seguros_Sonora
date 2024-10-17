import { Module } from '@nestjs/common';
import { PolizaController } from 'src/controllers/poliza.controller';
import { Poliza_ramoController } from 'src/controllers/poliza_ramo.controller';
import { PolizaRamoService } from 'src/services/poliza_ramo.service';

@Module({
    controllers: [Poliza_ramoController],
    providers: [PolizaRamoService],
  })
export class PolizaRamoModule {}
