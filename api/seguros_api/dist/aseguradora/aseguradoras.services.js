"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AseguradoraServicio = void 0;
const common_1 = require("@nestjs/common");
let AseguradoraServicio = class AseguradoraServicio {
    constructor() {
        this.aseguradora = [];
    }
    getAllProducts() {
        return this.aseguradora;
    }
    getProductById(id_aseguradora) {
        return this.aseguradora.find(aseguradora => aseguradora.id_aseguradora === id_aseguradora);
    }
    createProduct(aseguradora) {
        const newProduct = { id: this.aseguradora.length + 1, ...aseguradora };
        this.aseguradora.push(newProduct);
        return newProduct;
    }
    updateProduct(id_aseguradora, updatedProduct) {
        const index = this.aseguradora.findIndex(product => product.id_aseguradora === id_aseguradora);
        if (index !== -1) {
            this.aseguradora[index] = { ...updatedProduct, id_aseguradora: id_aseguradora };
            return this.aseguradora[index];
        }
        return undefined;
    }
    deleteProduct(numero_serie) {
        this.aseguradora = this.aseguradora.filter(product => product.id_aseguradora !== numero_serie);
    }
};
exports.AseguradoraServicio = AseguradoraServicio;
exports.AseguradoraServicio = AseguradoraServicio = __decorate([
    (0, common_1.Injectable)()
], AseguradoraServicio);
//# sourceMappingURL=aseguradoras.services.js.map