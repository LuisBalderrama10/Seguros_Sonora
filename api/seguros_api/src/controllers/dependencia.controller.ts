import { Controller, Get } from "@nestjs/common";
import { DependenciaService } from "src/services/dependencia.service";

@Controller('dependencia')
export class DependenciaController {
    constructor (private readonly dependenciaService: DependenciaService) {}

    @Get('allDependencias')
    getDependencias(): string {
        return this.dependenciaService.getAllDependencias();
    }

}