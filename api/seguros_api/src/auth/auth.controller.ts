import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/signin.dto';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    @ApiOperation({ summary: 'Login de usuario' })
    @ApiResponse({ 
      status: HttpStatus.OK,
      description: 'Login exitoso',
      schema: {
        properties: {
          access_token: { type: 'string' }
        }
      }
    })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Credenciales inválidas' })
    signIn(@Body() signInDto: SignInDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  }

//Se utilizo jwt para la creacion de tokens 
// npm install --save @nestjs/jwt