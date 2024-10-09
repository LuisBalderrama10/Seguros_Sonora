import { Injectable } from "@nestjs/common";

@Injectable()
export class  SiniestroService {
    getAllSiniestros(): string {
        return 'Devuelve todas los siniestros!';
    }
}