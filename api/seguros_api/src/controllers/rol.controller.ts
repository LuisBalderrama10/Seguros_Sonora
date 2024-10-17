import { Controller, Get } from "@nestjs/common";
import { PolizaService } from "src/services/poliza.service";

@Controller('rol')
export class RolController {
    constructor (private readonly polizaService: PolizaService) {}

    @Get('allRol')
    getRol(): string {
        return this.polizaService.getAllPolizas();
    }

}