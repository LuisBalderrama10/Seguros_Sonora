import { Module } from '@nestjs/common';
import { InstitucionController } from 'src/controllers/institucion.controller';
import { InstitucionService } from 'src/services/institucion.service';

@Module({
    controllers: [InstitucionController],
    providers: [InstitucionService],
  })
export class InstitucionModule {}
