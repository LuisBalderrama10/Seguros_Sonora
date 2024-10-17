import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service';
//import { UsersModule } from './users/users.module';
//import { AuthModule } from './auth/auth.module';
//import { UsersModule } from './users/users.module'; // Asegúrate de tener un módulo de usuarios
import { AccidentesEscolaresModule } from './modules/accidentes_escolares.module';

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
    //UsersModule,
    //AuthModule, // Importa otros módulos aquí
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
