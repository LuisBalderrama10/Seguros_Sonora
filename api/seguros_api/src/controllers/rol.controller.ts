import { Controller, Get } from "@nestjs/common";
import { PolizaService } from "src/services/poliza.service";
import { RolService } from "src/services/rol.service";

@Controller('rol')
export class RolController {
    constructor (private readonly rolService: RolService) {}

    @Get('allRol')
    getRol(): string {
        return this.rolService.getAllRoles();
    }

}