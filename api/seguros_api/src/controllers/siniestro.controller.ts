import { Controller, Get } from "@nestjs/common";
import { SiniestroService } from "src/services/siniestros.service";

@Controller('siniestro')
export class SiniestroController {
    constructor (private readonly siniestroService: SiniestroService) {}

    @Get('allSiniestro_tipo')
    getSiniestro_tipo(): string {
        return this.siniestroService.getAllSiniestros();
    }

}