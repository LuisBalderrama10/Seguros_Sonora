import { Controller, Get } from "@nestjs/common";
import { Vehiculo_TipoService } from "src/services/vehiculo_tipo.service";

@Controller('vehiculo_tipo')
export class Vehiculo_tipoController {
    constructor (private readonly vehiculo_tipoService: Vehiculo_TipoService) {}

    @Get('allVehiculo_tipo')
    getVehiculo_tipo(): string {
        return this.vehiculo_tipoService.getAllVehiculo_tipo();
    }

}