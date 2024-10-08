import { Injectable } from "@nestjs/common";

@Injectable()
export class  Seg_Rc_UsaService {
    getAllSg_rc(): string {
        return 'Devuelve todas los seg_rc!';
    }
}