import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/TypeOrm';
import { VehiculoController } from './vehiculo/vehiculos.controller';
import { VehiculoServicio } from './vehiculo/vehiculos.services';
import { AseguradoraController } from './aseguradora/aseguradora.controllers';
import { AseguradoraServicio } from './aseguradora/aseguradoras.services';
import { ConnectionService } from './connection.service';
import { TestController } from './test.controller';
import { VehiculoEntity } from './vehiculo/vehiculo.entity';

@Module({
  imports: [],
  controllers: [VehiculoController, AseguradoraController],
  providers: [VehiculoServicio, AseguradoraServicio],
})


//Para probar conexion usar este link http://localhost:3000/test/connection
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
  controllers: [VehiculoController, AseguradoraController, TestController],
  providers: [VehiculoServicio, AseguradoraServicio, ConnectionService],
})
export class AppModule {}

