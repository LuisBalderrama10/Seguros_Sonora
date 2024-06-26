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
exports.MarcaVehiculoController = void 0;
const common_1 = require("@nestjs/common");
const marca_vehiculo_services_1 = require("./marca.vehiculo.services");
let MarcaVehiculoController = class MarcaVehiculoController {
    constructor(marcavehiculoServicio) {
        this.marcavehiculoServicio = marcavehiculoServicio;
    }
    getAllProducts() {
        return this.marcavehiculoServicio.getAllProducts();
    }
    getProductById(id) {
        return this.marcavehiculoServicio.getProductById(+id);
    }
    createProduct(product) {
        return this.marcavehiculoServicio.createProduct(product);
    }
    updateProduct(id, updatedProduct) {
        return this.marcavehiculoServicio.updateProduct(+id, updatedProduct);
    }
    deleteProduct(id) {
        this.marcavehiculoServicio.deleteProduct(+id);
    }
};
exports.MarcaVehiculoController = MarcaVehiculoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MarcaVehiculoController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], MarcaVehiculoController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MarcaVehiculoController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], MarcaVehiculoController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MarcaVehiculoController.prototype, "deleteProduct", null);
exports.MarcaVehiculoController = MarcaVehiculoController = __decorate([
    (0, common_1.Controller)('marcavehiculos'),
    __metadata("design:paramtypes", [marca_vehiculo_services_1.MarcaVehiculoServicio])
], MarcaVehiculoController);
//# sourceMappingURL=marca.vehiculo.controller.js.map