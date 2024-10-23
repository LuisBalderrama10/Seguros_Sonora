import { Injectable } from "@nestjs/common";

//Tomamos una entidad 
export type Usuario = any;
@Injectable()
export class  UsuarioService {
    private readonly usuario = [
        {
          userId: 1,
          username: 'LuisBalderrama',
          password: '12345',
        },
        {
          userId: 2,
          username: 'CalebRosas',
          password: '56789',
        },
      ];

      async findOne(username: string): Promise<Usuario | undefined> {
        return this.usuario.find(usuario => usuario.username === username);
      }
}