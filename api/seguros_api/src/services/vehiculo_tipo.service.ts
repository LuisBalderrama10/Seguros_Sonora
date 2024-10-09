import { Injectable } from "@nestjs/common";

@Injectable()
export class  Vehiculo_TipoService {
    getAllVehiculo_tipo(): string {
        return 'Devuelve todas los tipos de vehiculos!';
    }
}