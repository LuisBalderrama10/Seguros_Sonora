import { Injectable } from "@nestjs/common";

@Injectable()
export class  Vehiculo_TipoService {
    getAllRoles(): string {
        return 'Devuelve todas los tipos de vehiculos!';
    }
}