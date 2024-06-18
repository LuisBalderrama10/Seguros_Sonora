import { Body, Controller, Get, Post } from '@nestjs/common';

export class Usuarios {
    name: string;
    password: string;
  }

@Controller("usuarios")
export class UsuariosController {

    @Post()
    async login(@Body() createCatDto: Usuarios) {
        console.log("This is my body", createCatDto)
      return 'This action adds a new cat';
    }

}