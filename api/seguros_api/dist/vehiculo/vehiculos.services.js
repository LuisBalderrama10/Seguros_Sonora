"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoServicio = void 0;
const common_1 = require("@nestjs/common");
let VehiculoServicio = class VehiculoServicio {
    constructor() {
        this.vehiculos = [];
    }
    getAllProducts() {
        return this.vehiculos;
    }
    getProductById(numero_serie) {
        return this.vehiculos.find(vehiculo => vehiculo.Numero_serie === numero_serie);
    }
    createProduct(vehiculo) {
        const newProduct = { id: this.vehiculos.length + 1, ...vehiculo };
        this.vehiculos.push(newProduct);
        return newProduct;
    }
    updateProduct(numero_serie, updatedProduct) {
        const index = this.vehiculos.findIndex(product => product.Numero_serie === numero_serie);
        if (index !== -1) {
            this.vehiculos[index] = { ...updatedProduct, Numero_serie: numero_serie };
            return this.vehiculos[index];
        }
        return undefined;
    }
    deleteProduct(numero_serie) {
        this.vehiculos = this.vehiculos.filter(product => product.Numero_serie !== numero_serie);
    }
};
exports.VehiculoServicio = VehiculoServicio;
exports.VehiculoServicio = VehiculoServicio = __decorate([
    (0, common_1.Injectable)()
], VehiculoServicio);
//# sourceMappingURL=vehiculos.services.js.map