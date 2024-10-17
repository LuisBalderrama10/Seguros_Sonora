import { Controller, Get } from "@nestjs/common";
import { Seguro_TipoService } from "src/services/seguro_tipo.service";

@Controller('seguro_tipo')
export class Seguro_tipoController {
    constructor (private readonly seguro_tipoService: Seguro_TipoService) {}

    @Get('allSeguro_tipo')
    getSeguro_tipo(): string {
        return this.seguro_tipoService.getAllSeguros_tipo();
    }

}