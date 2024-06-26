"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolizaServicio = void 0;
const common_1 = require("@nestjs/common");
let PolizaServicio = class PolizaServicio {
    constructor() {
        this.ramospolizas = [];
    }
    getAllProducts() {
        return this.ramospolizas;
    }
    getProductById(Id_ramo_poliza) {
        return this.ramospolizas.find(poliza => poliza.Id_ramo_poliza === Id_ramo_poliza);
    }
    createProduct(poliza) {
        const newProduct = { id: this.ramospolizas.length + 1, ...poliza };
        this.ramospolizas.push(newProduct);
        return newProduct;
    }
    updateProduct(Id_ramo_poliza, updatedProduct) {
        const index = this.ramospolizas.findIndex(product => product.Id_ramo_poliza === Id_ramo_poliza);
        if (index !== -1) {
            this.ramospolizas[index] = { ...updatedProduct, Id_ramo_poliza: Id_ramo_poliza };
            return this.ramospolizas[index];
        }
        return undefined;
    }
    deleteProduct(Id_ramo_poliza) {
        this.ramospolizas = this.ramospolizas.filter(product => product.Id_ramo_poliza !== Id_ramo_poliza);
    }
};
exports.PolizaServicio = PolizaServicio;
exports.PolizaServicio = PolizaServicio = __decorate([
    (0, common_1.Injectable)()
], PolizaServicio);
//# sourceMappingURL=ramo_poliza.services.js.map