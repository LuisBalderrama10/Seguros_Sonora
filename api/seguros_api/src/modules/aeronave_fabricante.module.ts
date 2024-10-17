import { Module } from '@nestjs/common';
import { Aeronave_FabricanteController } from 'src/controllers/aeronave_fabricante.controller';
import { Aeronave_Fabricante_Service } from 'src/services/aeronave_fabricante.service';

@Module({
    controllers: [Aeronave_FabricanteController],
    providers: [Aeronave_Fabricante_Service],
  })
export class AeronaveFabricanteModule {}
