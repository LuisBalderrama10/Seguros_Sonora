import { Injectable } from "@nestjs/common";

@Injectable()
export class  Seguro_TipoService {
    getAllRoles(): string {
        return 'Devuelve todas los tipos de seguros!';
    }
}