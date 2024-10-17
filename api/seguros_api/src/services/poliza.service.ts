import { Injectable } from "@nestjs/common";

@Injectable()
export class  PolizaService {
    getAllPolizas(): string {
        return 'Devuelve todas las Polizas!';
    }
}