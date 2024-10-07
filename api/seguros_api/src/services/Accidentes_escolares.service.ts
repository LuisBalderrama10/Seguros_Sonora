import { Injectable } from "@nestjs/common";

@Injectable()
export class  Accidentes_Escolares_Service {
    getAllAccidentes(): string {
        return 'Devuelve un accidente!';
    }

    getOneAccidentes(): string {
        return 'Devuelve un accidente!';
    }
}