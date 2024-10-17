import { Controller, Get } from "@nestjs/common";
import { Aeronave_Service } from "src/services/aeronave.service";

@Controller('aeronave')
export class AeronaveController {
    constructor (private readonly aeronave_Service: Aeronave_Service) {}

    @Get('allAeronave')
    getAeronave(): string {
        return this.aeronave_Service.getAllAeronave();
    }

}