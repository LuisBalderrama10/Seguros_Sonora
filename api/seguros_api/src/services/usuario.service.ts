import { Injectable } from "@nestjs/common";

@Injectable()
export class  UsuarioService {
    getAllUsuarios(): string {
        return 'Devuelve un usuario!';
    }

    getOneUsuario(): string {
        return 'Devuelve un gato!';
    }
}