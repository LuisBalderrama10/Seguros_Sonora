"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('Current environment:', process.env.NODE_ENV);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:4200',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SegurosSonora')
        .setDescription('Api de seguros sonora')
        .setVersion('1.0')
        .addTag('Seguros')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log('Application is running on: http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map