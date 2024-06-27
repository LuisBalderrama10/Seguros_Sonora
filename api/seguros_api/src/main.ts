import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Current environment:', process.env.NODE_ENV);

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SegurosSonora')
    .setDescription('Api de seguros sonora')
    .setVersion('1.0')
    .addTag('Seguros')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  console.log('Application is running on: http://localhost:3000');//Log para conexion de base de datos
}
bootstrap();