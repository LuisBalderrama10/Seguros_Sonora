export declare class CreateCatDto {
    name: string;
    password: string;
}
export declare class UsuariosController {
    login(createCatDto: CreateCatDto): Promise<string>;
}
