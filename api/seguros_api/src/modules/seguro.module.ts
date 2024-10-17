import { Module } from '@nestjs/common';
import { SeguroController } from 'src/controllers/seguro.controller';
import { SeguroService } from 'src/services/seguro.service';

@Module({
    controllers: [SeguroController],
    providers: [SeguroService],
  })
export class SeguroModule {}
