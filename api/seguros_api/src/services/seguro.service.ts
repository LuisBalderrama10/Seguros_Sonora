import { Injectable } from "@nestjs/common";

@Injectable()
export class  SeguroService {
    getAllSeguro(): string {
        return 'Devuelve todos los seguros!';
    }
}