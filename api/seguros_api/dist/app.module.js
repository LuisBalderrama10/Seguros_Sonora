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
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const data_source_1 = require("./data-source");
const accidentes_escolares_module_1 = require("./modules/accidentes_escolares.module");
const aeronave_fabricante_module_1 = require("./modules/aeronave_fabricante.module");
const aeronave_module_1 = require("./modules/aeronave.module");
const aseguradora_module_1 = require("./modules/aseguradora.module");
const clientes_module_1 = require("./modules/clientes.module");
const dependencia_module_1 = require("./modules/dependencia.module");
const inmueble_module_1 = require("./modules/inmueble.module");
const institucion_module_1 = require("./modules/institucion.module");
const poliza_module_1 = require("./modules/poliza.module");
const poliza_ramo_module_1 = require("./modules/poliza_ramo.module");
const rol_module_1 = require("./modules/rol.module");
const seg_rc_usa_module_1 = require("./modules/seg_rc_usa.module");
const seguro_module_1 = require("./modules/seguro.module");
const seguro_tipo_module_1 = require("./modules/seguro_tipo.module");
const siniestro_module_1 = require("./modules/siniestro.module");
const tipo_inmueble_module_1 = require("./modules/tipo_inmueble.module");
const vehiculo_module_1 = require("./modules/vehiculo.module");
const vehiculo_marca_module_1 = require("./modules/vehiculo_marca.module");
const vehiculo_tipo_module_1 = require("./modules/vehiculo_tipo.module");
const auth_module_1 = require("./auth/auth.module");
const usuario_module_1 = require("./modules/usuario.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(data_source_1.AppDataSource.options),
            accidentes_escolares_module_1.AccidentesEscolaresModule,
            aeronave_fabricante_module_1.AeronaveFabricanteModule,
            aeronave_module_1.AeronaveModule,
            aseguradora_module_1.AseguradoraModule,
            clientes_module_1.ClientesModule,
            dependencia_module_1.DependenciaModule,
            inmueble_module_1.InmuebleModule,
            institucion_module_1.InstitucionModule,
            poliza_module_1.PolizaModule,
            poliza_ramo_module_1.PolizaRamoModule,
            rol_module_1.RolModule,
            seg_rc_usa_module_1.SegRcUsaModule,
            seguro_module_1.SeguroModule,
            seguro_tipo_module_1.SeguroTipoModule,
            siniestro_module_1.SiniestroModule,
            tipo_inmueble_module_1.TipoInmuebleModule,
            usuario_module_1.UsuarioModule,
            vehiculo_marca_module_1.VehiculoMarcaModule,
            vehiculo_module_1.VehiculoModule,
            vehiculo_tipo_module_1.VehiculoTipoModule,
            auth_module_1.AuthModule,
            usuario_module_1.UsuarioModule
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map