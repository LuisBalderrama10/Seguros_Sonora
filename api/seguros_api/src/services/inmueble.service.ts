import { Injectable } from "@nestjs/common";

@Injectable()
export class  InmuebleService {
    getAllInmuebles(): string {
        return 'Devuelve muchos inmuebles!';
    }

    getOneInmueble(): string {
        return 'Devuelve un inmbueble!';
    }
}