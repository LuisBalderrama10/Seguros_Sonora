import { Injectable } from "@nestjs/common";

@Injectable()
export class  Tipo_inmuebleService {
    getAllRoles(): string {
        return 'Devuelve todas los tipos de inmuebles!';
    }
}