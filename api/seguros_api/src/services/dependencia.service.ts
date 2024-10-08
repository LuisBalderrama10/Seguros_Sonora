import { Injectable } from "@nestjs/common";

@Injectable()
export class  DependenciaService {
    getAllDependencias(): string {
        return 'Devuelve todas Dependencia!';
    }

    getOneDependencia(): string {
        return 'Devuelve un Dependencia!';
    }
}