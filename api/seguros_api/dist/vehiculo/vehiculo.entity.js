"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
const typeorm_1 = require("typeorm");
const vehiculo_marca_entity_1 = require("./vehiculo_marca.entity");
class Vehiculo {
}
exports.Vehiculo = Vehiculo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vehiculo.prototype, "id_vehiculo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Vehiculo.prototype, "numero_serie", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => vehiculo_marca_entity_1.Marca_vehiculo, marca_vehiculo => marca_vehiculo.vehiculo, { nullable: false }),
    __metadata("design:type", Array)
], Vehiculo.prototype, "marca_vehiculo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Vehiculo.prototype, "colosar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, unique: true }),
    __metadata("design:type", String)
], Vehiculo.prototype, "placas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Vehiculo.prototype, "tipasaso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Vehiculo.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', length: 2 }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "numero_cilindros", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Vehiculo.prototype, "numero_activo_sap", void 0);
//# sourceMappingURL=vehiculo.entity.js.map