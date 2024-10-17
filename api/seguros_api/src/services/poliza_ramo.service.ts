import { Injectable } from "@nestjs/common";

@Injectable()
export class  PolizaRamoService {
    getAllPoliza_ramo(): string {
        return 'Devuelve todas los ramos de polizas!';
    }
}