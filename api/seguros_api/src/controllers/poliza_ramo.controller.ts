import { Controller, Get } from "@nestjs/common";
import { PolizaRamoService } from "src/services/poliza_ramo.service";

@Controller('poliza_ramo')
export class Poliza_ramoController {
    constructor (private readonly polizaRamoService: PolizaRamoService) {}

    @Get('allPolizaRamo')
    getPoliza_ramos(): string {
        return this.polizaRamoService.getAllPoliza_ramo();
    }

}