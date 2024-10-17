import { Module } from '@nestjs/common';
import { Accidentes_Escolares_Controller } from 'src/controllers/accidentes_escolares.controller';
import { Accidentes_Escolares_Service } from 'src/services/Accidentes_escolares.service';

@Module({
  controllers: [Accidentes_Escolares_Controller],
  providers: [Accidentes_Escolares_Service],
})
export class AccidentesEscolaresModule {}
