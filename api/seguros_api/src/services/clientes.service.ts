import { Injectable } from "@nestjs/common";

@Injectable()
export class  ClienteService {
    getAllClientes(): string {
        return 'Devuelve un usuario!';
    }

    getOneCliente(): string {
        return 'Devuelve un usuario!';
    }
}