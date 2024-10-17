import { Module } from '@nestjs/common';
import { RolController } from 'src/controllers/rol.controller';
import { RolService } from 'src/services/rol.service';

@Module({
    controllers: [RolController],
    providers: [RolService],
  })
export class RolModule {}
