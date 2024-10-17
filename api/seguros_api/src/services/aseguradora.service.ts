import { Injectable } from "@nestjs/common";

@Injectable()
export class  Aseguradora_Service {
    getAllAseguradora(): string {
        return 'Devuelve una aseguradora!';
    }

    getOneAseguradora(): string {
        return 'Devuelve una aseguradora!';
    }
}