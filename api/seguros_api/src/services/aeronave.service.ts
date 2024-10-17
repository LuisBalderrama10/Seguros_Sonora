import { Injectable } from "@nestjs/common";

@Injectable()
export class  Aeronave_Service {
    getAllAeronave(): string {
        return 'Devuelve una aeronave!';
    }

    getOneAeronave(): string {
        return 'Devuelve un aeronave!';
    }
}