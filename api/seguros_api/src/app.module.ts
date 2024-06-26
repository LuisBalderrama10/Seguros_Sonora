import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { VehiculoController } from './vehiculo/vehiculos.controller';
import { VehiculoServicio } from './vehiculo/vehiculos.services';
import { AseguradoraController } from './aseguradora/aseguradora.controllers';
import { AseguradoraServicio } from './aseguradora/aseguradoras.services';
import { FaeronvaeController } from './aeronave/fabricante_aeronave/fabricante.aeronave.controller';
import { FabricanteAeronaveServicio } from './aeronave/fabricante_aeronave/fabricante.aeronave.service';
import { MarcaVehiculoController } from './vehiculo/marca_vehiculo/marca.vehiculo.controller';
import { MarcaVehiculoServicio } from './vehiculo/marca_vehiculo/marca.vehiculo.services';
import { AeronaveController } from './aeronave/aeronave.controller';
import { AeronaveServicio } from './aeronave/aeronave.services';

import { ConnectionService } from './connection.service';
import { TestController } from './test.controller';
import { VehiculoEntity } from './vehiculo/vehiculo.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.90.209',
      port: 5432,
      username: 'seguros_inst_db',
      password: '1920siadmin',
      database: 'sonora_dig',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: 'all', // Habilitar logging
    }),
    TypeOrmModule.forFeature([VehiculoEntity]), // Importar la entidad que usarás en el test
  ],
  controllers: [
    VehiculoController,
    AseguradoraController,
    FaeronvaeController,
    MarcaVehiculoController,
    AeronaveController,
    TestController,
  ],
  providers: [
    VehiculoServicio,
    AseguradoraServicio,
    FabricanteAeronaveServicio,
    MarcaVehiculoServicio,
    AeronaveServicio,
    ConnectionService,
  ],
})
export class AppModule {}