import { Module, Search } from '@nestjs/common';
import { Seg_rc_usaController } from 'src/controllers/seg_rc_usa.controller';
import { Seg_Rc_UsaService } from 'src/services/seg_rc_usa.service';

@Module({
    controllers: [Seg_rc_usaController],
    providers: [Seg_Rc_UsaService],
  })
export class SegRcUsaModule {}
