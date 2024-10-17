import { Controller, Get } from "@nestjs/common";
import { Tipo_inmuebleService } from "src/services/tipo_inmueble.service";

@Controller('tipo_inmueble')
export class Tipo_inmuebleController {
    constructor (private readonly tipo_inmuebleService: Tipo_inmuebleService) {}

    @Get('allSiniestro_tipo')
    getSiniestro_tipo(): string {
        return this.tipo_inmuebleService.getAllTipo_inmueble();
    }

}