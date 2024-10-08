import { Injectable } from "@nestjs/common";

@Injectable()
export class  SiniestroService {
    getAllRoles(): string {
        return 'Devuelve todas los siniestros!';
    }
}