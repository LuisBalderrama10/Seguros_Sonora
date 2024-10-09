import { Controller, Get } from "@nestjs/common";
import { VehiculoService } from "src/services/vehiculo.service";

@Controller('vehiculo')
export class VehiculoController {
    constructor (private readonly vehiculoService: VehiculoService) {}

    @Get('allVehiculo')
    getVehiculo(): string {
        return this.vehiculoService.getAllVehiculo();
    }

}