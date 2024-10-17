import { Module } from '@nestjs/common';
import { InmuebleController } from 'src/controllers/inmueble.controller';
import { InmuebleService } from 'src/services/inmueble.service';

@Module({
    controllers: [InmuebleController],
    providers: [InmuebleService],
  })
export class InmuebleModule {}
