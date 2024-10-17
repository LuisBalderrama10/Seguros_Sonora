import { Injectable } from "@nestjs/common";

@Injectable()
export class  Aeronave_Fabricante_Service {
    getAllFabricante(): string {
        return 'Devuelve un fabricante!';
    }

    getOneFabricante(): string {
        return 'Devuelve un fabricante!';
    }
}