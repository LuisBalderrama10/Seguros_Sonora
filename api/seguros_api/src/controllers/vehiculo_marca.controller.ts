import { Controller, Get } from "@nestjs/common";
import { VehiculoMarcaService } from "src/services/vehiculo_marca.service";

@Controller('vehiculo_marca')
export class Vehiculo_marcaController {
    constructor (private readonly vehiculo_marcaService: VehiculoMarcaService) {}

    @Get('allVehiculo_marca')
    getSiniestro_tipo(): string {
        return this.vehiculo_marcaService.getAllVehiculo_marca();
    }

}