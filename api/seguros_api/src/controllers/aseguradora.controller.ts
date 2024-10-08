import { Controller, Get } from "@nestjs/common";
import { Aseguradora_Service } from "src/services/aseguradora.service";

@Controller('aseguradora')
export class AseguradoraController {
    constructor (private readonly aseguradora_Service: Aseguradora_Service) {}

    @Get('allAseguradora')
    getUsuarios(): string {
        return this.aseguradora_Service.getAllAseguradora();
    }

}