import { Module } from '@nestjs/common';
import { DependenciaController } from 'src/controllers/dependencia.controller';
import { DependenciaService } from 'src/services/dependencia.service';

@Module({
    controllers: [DependenciaController],
    providers: [DependenciaService],
  })
export class DependenciaModule {}
