import { Injectable } from "@nestjs/common";

@Injectable()
export class  Siniestro_TipoService {
    getAllSiniestro_tipos(): string {
        return 'Devuelve todas los tipos de sieniestros!';
    }
}