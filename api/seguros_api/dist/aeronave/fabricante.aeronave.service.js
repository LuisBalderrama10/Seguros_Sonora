"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricanteAeronaveServicio = void 0;
const common_1 = require("@nestjs/common");
let FabricanteAeronaveServicio = class FabricanteAeronaveServicio {
    constructor() {
        this.fabricantesAeronaves = [];
    }
    getAllProducts() {
        return this.fabricantesAeronaves;
    }
    getProductById(id_fabricante) {
        return this.fabricantesAeronaves.find(fabricanteaeronave => fabricanteaeronave.id_fabricante === id_fabricante);
    }
    createProduct(fabricanteaeronave) {
        const newProduct = { id: this.fabricantesAeronaves.length + 1, ...fabricanteaeronave };
        this.fabricantesAeronaves.push(newProduct);
        return newProduct;
    }
    updateProduct(id_fabricante, updatedProduct) {
        const index = this.fabricantesAeronaves.findIndex(product => product.id_fabricante === id_fabricante);
        if (index !== -1) {
            this.fabricantesAeronaves[index] = { ...updatedProduct, id_fabricante: id_fabricante };
            return this.fabricantesAeronaves[index];
        }
        return undefined;
    }
    deleteProduct(id_fabricante) {
        this.fabricantesAeronaves = this.fabricantesAeronaves.filter(product => product.id_fabricante !== id_fabricante);
    }
};
exports.FabricanteAeronaveServicio = FabricanteAeronaveServicio;
exports.FabricanteAeronaveServicio = FabricanteAeronaveServicio = __decorate([
    (0, common_1.Injectable)()
], FabricanteAeronaveServicio);
//# sourceMappingURL=fabricante.aeronave.service.js.map