import { Controller, Get } from "@nestjs/common";
import { InstitucionService } from "src/services/institucion.service";

@Controller('instituciones')
export class InstitucionController {
    constructor (private readonly institucionService: InstitucionService) {}

    @Get('allInstituciones')
    getInstituciones(): string {
        return this.institucionService.getAllInstituciones();
    }

}