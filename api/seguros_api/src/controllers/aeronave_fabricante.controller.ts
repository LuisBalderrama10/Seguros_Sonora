import { Controller, Get } from "@nestjs/common";
import { Aeronave_Fabricante_Service } from "src/services/aeronave_fabricante.service";

@Controller('aeronave_fabricante')
export class Aeronave_FabricanteController {
    constructor (private readonly aeronave_fabricanteService: Aeronave_Fabricante_Service) {}

    @Get('allAeronave_fabricante')
    getUsuarios(): string {
        return this.aeronave_fabricanteService.getAllFabricante();
    }

}