import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UsersModule } from './users/users.module'; // Asegúrate de tener un módulo de usuarios

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'seguros_inst_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    //UsersModule, // Importa otros módulos aquí
  ],
})
export class AppModule {}
