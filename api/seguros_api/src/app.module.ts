import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service';

import { AccidentesEscolaresModule } from './modules/accidentes_escolares.module';
import { AeronaveFabricanteModule } from './modules/aeronave_fabricante.module';
import { AeronaveModule } from './modules/aeronave.module';
import { AseguradoraModule } from './modules/aseguradora.module';
import { ClientesModule } from './modules/clientes.module';
import { DependenciaModule } from './modules/dependencia.module';
import { InmuebleModule } from './modules/inmueble.module';
import { InstitucionModule } from './modules/institucion.module';
import { PolizaModule } from './modules/poliza.module';
import { PolizaRamoModule } from './modules/poliza_ramo.module';
import { RolModule } from './modules/rol.module';
import { SegRcUsaModule } from './modules/seg_rc_usa.module';
import { SeguroModule } from './modules/seguro.module';
import { SeguroTipoModule } from './modules/seguro_tipo.module';
import { SiniestroModule } from './modules/siniestro.module';
import { TipoInmuebleModule } from './modules/tipo_inmueble.module';
import { UsuarioModule } from './modules/usuario.module';
import { VehiculoModule } from './modules/vehiculo.module';
import { VehiculoMarcaModule } from './modules/vehiculo_marca.module';
import { VehiculoTipoModule } from './modules/vehiculo_tipo.module';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Welcome to the API!';
  }
}
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'seguros_inst_db',
      entities: [Usuario],
      synchronize: true,
    }),
    AccidentesEscolaresModule,
    AeronaveFabricanteModule,
    AeronaveModule,
    AseguradoraModule,
    ClientesModule,
    DependenciaModule,
    InmuebleModule,
    InstitucionModule,
    PolizaModule,
    PolizaRamoModule,
    RolModule,
    SegRcUsaModule,
    SeguroModule,
    SeguroTipoModule,
    SiniestroModule,
    TipoInmuebleModule,
    UsuarioModule,
    VehiculoMarcaModule,
    VehiculoModule,
    VehiculoTipoModule
    ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
