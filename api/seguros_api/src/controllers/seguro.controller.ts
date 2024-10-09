import { Controller, Get } from "@nestjs/common";
import { SeguroService } from "src/services/seguro.service";

@Controller('seguro')
export class InstitucionController {
    constructor (private readonly seguroService: SeguroService) {}

    @Get('allSeguro')
    getSeguro(): string {
        return this.seguroService.getAllSeguro();
    }

}