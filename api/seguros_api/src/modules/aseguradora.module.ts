import { Module } from '@nestjs/common';
import { AseguradoraController } from 'src/controllers/aseguradora.controller';
import { Aseguradora_Service } from 'src/services/aseguradora.service';

@Module({
    controllers: [AseguradoraController],
    providers: [Aseguradora_Service],
  })
export class AseguradoraModule {}
