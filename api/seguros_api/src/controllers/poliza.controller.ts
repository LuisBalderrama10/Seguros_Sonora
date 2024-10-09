import { Controller, Get } from "@nestjs/common";
import { PolizaService } from "src/services/poliza.service";

@Controller('poliza')
export class PolizaController {
    constructor (private readonly polizaService: PolizaService) {}

    @Get('allPoliza')
    getPoliza(): string {
        return this.polizaService.getAllPolizas();
    }

}