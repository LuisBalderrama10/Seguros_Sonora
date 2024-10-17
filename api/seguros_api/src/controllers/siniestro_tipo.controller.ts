import { Controller, Get } from "@nestjs/common";
import { Siniestro_TipoService } from "src/services/siniestro_tipo.service";

@Controller('siniestro_tipo')
export class Siniestro_tipoController {
    constructor (private readonly siniestro_tipoService: Siniestro_TipoService) {}

    @Get('allSiniestro_tipo')
    getSiniestro_tipo(): string {
        return this.siniestro_tipoService.getAllSiniestro_tipos();
    }

}