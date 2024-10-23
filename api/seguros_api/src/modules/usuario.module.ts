import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controllers/usuario.controller';
import { UsuarioService } from 'src/services/usuario.service';

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports : [UsuarioService]
  })
export class UsuarioModule {}
