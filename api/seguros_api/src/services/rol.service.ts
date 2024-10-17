import { Injectable } from "@nestjs/common";

@Injectable()
export class  RolService {
    getAllRoles(): string {
        return 'Devuelve todas los roles!';
    }
}