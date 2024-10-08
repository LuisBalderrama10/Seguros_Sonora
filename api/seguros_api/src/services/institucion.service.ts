import { Injectable } from "@nestjs/common";

@Injectable()
export class  InstitucionService {
    getAllInstituciones(): string {
        return 'Devuelve todas las instituciones!';
    }
}