import { Injectable } from "@nestjs/common";

@Injectable()
export class  VehiculoService {
    getAllVehiculo(): string {
        return 'Devuelve todas los tipos de vehiculos!';
    }
}