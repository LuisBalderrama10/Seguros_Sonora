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
const fabricante_aeronave_controller_1 = require("./aeronave/fabricante.aeronave.controller");
const fabricante_aeronave_service_1 = require("./aeronave/fabricante.aeronave.service");
const marca_vehiculo_controller_1 = require("./vehiculo/marca.vehiculo.controller");
const marca_vehiculo_services_1 = require("./vehiculo/marca.vehiculo.services");
const connection_service_1 = require("./connection.service");
const test_controller_1 = require("./test.controller");
const vehiculo_entity_1 = require("./vehiculo/vehiculo.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [vehiculos_controller_1.VehiculoController, aseguradora_controllers_1.AseguradoraController, fabricante_aeronave_controller_1.FaeronvaeController, marca_vehiculo_controller_1.MarcaVehiculoController],
        providers: [vehiculos_services_1.VehiculoServicio, aseguradoras_services_1.AseguradoraServicio, fabricante_aeronave_service_1.FabricanteAeronaveServicio, marca_vehiculo_services_1.MarcaVehiculoServicio],
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
            TypeOrm_1.TypeOrmModule.forFeature([vehiculo_entity_1.VehiculoEntity]),
        ],
        controllers: [vehiculos_controller_1.VehiculoController, aseguradora_controllers_1.AseguradoraController, test_controller_1.TestController],
        providers: [vehiculos_services_1.VehiculoServicio, aseguradoras_services_1.AseguradoraServicio, connection_service_1.ConnectionService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map