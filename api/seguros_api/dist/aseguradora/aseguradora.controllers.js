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
exports.AseguradoraController = void 0;
const common_1 = require("@nestjs/common");
const aseguradoras_services_1 = require("./aseguradoras.services");
let AseguradoraController = class AseguradoraController {
    constructor(aseguradoraServicio) {
        this.aseguradoraServicio = aseguradoraServicio;
    }
    getAllProducts() {
        return this.aseguradoraServicio.getAllProducts();
    }
    getProductById(id) {
        return this.aseguradoraServicio.getProductById(+id);
    }
    createProduct(product) {
        return this.aseguradoraServicio.createProduct(product);
    }
    updateProduct(id, updatedProduct) {
        return this.aseguradoraServicio.updateProduct(+id, updatedProduct);
    }
    deleteProduct(id) {
        this.aseguradoraServicio.deleteProduct(+id);
    }
};
exports.AseguradoraController = AseguradoraController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AseguradoraController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AseguradoraController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AseguradoraController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], AseguradoraController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AseguradoraController.prototype, "deleteProduct", null);
exports.AseguradoraController = AseguradoraController = __decorate([
    (0, common_1.Controller)('aseguradora'),
    __metadata("design:paramtypes", [aseguradoras_services_1.AseguradoraServicio])
], AseguradoraController);
//# sourceMappingURL=aseguradora.controllers.js.map