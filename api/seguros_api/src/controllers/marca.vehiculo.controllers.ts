import { Body, Controller, Get, Post } from '@nestjs/common';

export class CreateCatDto {
    name: string;
    password: string;
  }

@Controller("usuarios")
export class UsuariosController {

    @Post()
    async login(@Body() createCatDto: CreateCatDto) {
        console.log("This is my body", createCatDto)
      return 'This action adds a new cat';
    }

}