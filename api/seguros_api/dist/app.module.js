"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const TypeOrm_1 = require("@nestjs/TypeOrm");
const vehiculos_controller_1 = require("./vehiculo/vehiculos.controller");
const vehiculos_services_1 = require("./vehiculo/vehiculos.services");
const aseguradora_controllers_1 = require("./aseguradora/aseguradora.controllers");
const aseguradoras_services_1 = require("./aseguradora/aseguradoras.services");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [vehiculos_controller_1.VehiculoController, aseguradora_controllers_1.AseguradoraController],
        providers: [vehiculos_services_1.VehiculoServicio, aseguradoras_services_1.AseguradoraServicio],
    }),
    (0, common_1.Module)({
        imports: [
            TypeOrm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '192.168.90.209',
                port: 5432,
                username: 'seguros_inst_db',
                password: '1920siadmin',
                database: 'sonora_dig',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: 'all',
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map