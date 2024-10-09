import { Injectable } from "@nestjs/common";

@Injectable()
export class  Tipo_inmuebleService {
    getAllTipo_inmueble(): string {
        return 'Devuelve todas los tipos de inmuebles!';
    }
}