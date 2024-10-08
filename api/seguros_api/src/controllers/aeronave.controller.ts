import { Controller, Get } from "@nestjs/common";
import { Aeronave_Service } from "src/services/aeronave.service";

@Controller('aeronave')
export class Aeronave_FabricanteController {
    constructor (private readonly aeronave_Service: Aeronave_Service) {}

    @Get('allAeronave')
    getUsuarios(): string {
        return this.aeronave_Service.getAllAeronave();
    }

}