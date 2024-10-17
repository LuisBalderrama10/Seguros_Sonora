import { Injectable } from "@nestjs/common";

@Injectable()
export class  VehiculoMarcaService {
    getAllVehiculo_marca(): string {
        return 'Devuelve todas las marcas de los vehiculos!';
    }
}