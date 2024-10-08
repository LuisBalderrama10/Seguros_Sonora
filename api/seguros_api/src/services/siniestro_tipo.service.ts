import { Injectable } from "@nestjs/common";

@Injectable()
export class  Siniestro_TipoService {
    getAllRoles(): string {
        return 'Devuelve todas los tipos de sieniestros!';
    }
}