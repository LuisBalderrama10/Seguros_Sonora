import { Module } from '@nestjs/common';
import { SiniestroController } from 'src/controllers/siniestro.controller';
import { SiniestroService } from 'src/services/siniestros.service';

@Module({
    controllers: [SiniestroController],
    providers: [SiniestroService],
  })
export class SiniestroModule {}
