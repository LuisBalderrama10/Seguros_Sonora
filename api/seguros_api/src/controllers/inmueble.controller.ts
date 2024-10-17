import { Controller, Get } from "@nestjs/common";
import { InmuebleService } from "src/services/inmueble.service";

@Controller('inmuebles')
export class InmuebleController {
    constructor (private readonly inmuebleService: InmuebleService) {}

    @Get('allInmuebles')
    getInmuebles(): string {
        return this.inmuebleService.getAllInmuebles();
    }

}