import { Injectable } from "@nestjs/common";

@Injectable()
export class  PolizaRamoService {
    getAllInstituciones(): string {
        return 'Devuelve todas los ramos de polizas!';
    }
}