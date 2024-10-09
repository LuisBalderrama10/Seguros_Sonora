import { Controller, Get } from "@nestjs/common";
import { ClienteService } from "src/services/clientes.service";

@Controller('clientes')
export class clienteController {
    constructor (private readonly clienteService: ClienteService) {}

    @Get('allClientes')
    getClientes(): string {
        return this.clienteService.getAllClientes();
    }

}