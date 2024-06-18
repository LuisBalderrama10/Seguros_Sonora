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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoController = void 0;
const common_1 = require("@nestjs/common");
const vehiculos_services_1 = require("./vehiculos.services");
let VehiculoController = class VehiculoController {
    constructor(vehiculoServicio) {
        this.vehiculoServicio = vehiculoServicio;
    }
    getAllProducts() {
        return this.vehiculoServicio.getAllProducts();
    }
    getProductById(id) {
        return this.vehiculoServicio.getProductById(+id);
    }
    createProduct(product) {
        return this.vehiculoServicio.createProduct(product);
    }
    updateProduct(id, updatedProduct) {
        return this.vehiculoServicio.updateProduct(+id, updatedProduct);
    }
    deleteProduct(id) {
        this.vehiculoServicio.deleteProduct(+id);
    }
};
exports.VehiculoController = VehiculoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], VehiculoController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], VehiculoController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], VehiculoController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], VehiculoController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehiculoController.prototype, "deleteProduct", null);
exports.VehiculoController = VehiculoController = __decorate([
    (0, common_1.Controller)('vehiculos'),
    __metadata("design:paramtypes", [vehiculos_services_1.VehiculoServicio])
], VehiculoController);
//# sourceMappingURL=vehiculo.controller.js.map