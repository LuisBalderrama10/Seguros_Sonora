import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario.service';
import { JwtService } from '@nestjs/jwt'
import { Usuario } from 'src/entities/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}

  async signIn(username: string, pass: string,): Promise<{access_token: string }> {
      const usuario = await this.usuarioService.findOne(username);

      if (usuario?.password !== pass) {
        throw new UnauthorizedException();
      }

      const payload = { 
        sub: usuario.userId, 
        username: usuario.username
      };

      return {
          access_token: await this.jwtService.signAsync(payload),
      };
    }
}
