import { Module } from '@nestjs/common';
import { AeronaveController } from 'src/controllers/aeronave.controller';
import { Aeronave_Service } from 'src/services/aeronave.service';

@Module({
    controllers: [AeronaveController],
    providers: [Aeronave_Service],
  })
export class AeronaveModule {}
