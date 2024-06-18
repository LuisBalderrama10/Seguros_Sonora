export declare class Usuarios {
    name: string;
    password: string;
}
export declare class UsuariosController {
    login(createCatDto: Usuarios): Promise<string>;
}
