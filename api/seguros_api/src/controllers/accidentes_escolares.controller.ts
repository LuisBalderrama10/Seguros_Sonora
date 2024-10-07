import { Controller, Get } from "@nestjs/common";
import { Accidentes_Escolares_Service } from "src/services/Accidentes_escolares.service";

@Controller('accidentes_escolares')
export class Acciedentes_Escolares_Controller {
    constructor (private readonly accidentes_escolares_Service: Accidentes_Escolares_Service) {}

    @Get('allAccidentes')
    getUsuarios(): string {
        return this.accidentes_escolares_Service.getAllAccidentes();
    }

    @Get('oneAccidentes')
    getOneUsuario(): string {
        return this.accidentes_escolares_Service.getOneAccidentes();
    }
}