import { Injectable } from "@nestjs/common";

@Injectable()
export class  Seguro_TipoService {
    getAllSeguros_tipo(): string {
        return 'Devuelve todas los tipos de seguros!';
    }
}