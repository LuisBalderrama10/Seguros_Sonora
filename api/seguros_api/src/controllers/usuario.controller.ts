import { Controller, Get } from "@nestjs/common";
import { UsuarioService } from "src/services/usuario.service";

@Controller('usuarios')
export class UsuarioController {
    constructor (private readonly usuarioService: UsuarioService) {}

    //@Get('allUsuarios')
    //getUsuarios(): string {
    //    return this.usuarioService.getAllUsuarios();
    //}

    //@Get('oneUsuario')
    //getOneUsuario(): string {
    //    return this.usuarioService.getOneUsuario();
    //}
}