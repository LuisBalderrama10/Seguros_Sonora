import { Controller, Get } from "@nestjs/common";
import { Seg_Rc_UsaService } from "src/services/seg_rc_usa.service";

@Controller('seg_rc_usa')
export class Seg_rc_usaController {
    constructor (private readonly seg_rc_usaService: Seg_Rc_UsaService) {}

    @Get('allSeg_rc_usa')
    getSeg_rc_usa(): string {
        return this.seg_rc_usaService.getAllSg_rc();
    }

}