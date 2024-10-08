import { Injectable } from "@nestjs/common";

@Injectable()
export class  VehiculoMarcaService {
    getAllRoles(): string {
        return 'Devuelve todas las marcas de los vehiculos!';
    }
}