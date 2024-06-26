"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AeronaveServicio = void 0;
const common_1 = require("@nestjs/common");
let AeronaveServicio = class AeronaveServicio {
    constructor() {
        this.aeronaves = [];
    }
    getAllProducts() {
        return this.aeronaves;
    }
    getProductById(Id_aeronave) {
        return this.aeronaves.find(vehiculo => vehiculo.Id_aeronave === Id_aeronave);
    }
    createProduct(vehiculo) {
        const newProduct = { id: this.aeronaves.length + 1, ...vehiculo };
        this.aeronaves.push(newProduct);
        return newProduct;
    }
    updateProduct(Id_aeronave, updatedProduct) {
        const index = this.aeronaves.findIndex(product => product.Id_aeronave === Id_aeronave);
        if (index !== -1) {
            this.aeronaves[index] = { ...updatedProduct, Id_aeronave: Id_aeronave };
            return this.aeronaves[index];
        }
        return undefined;
    }
    deleteProduct(Id_aeronave) {
        this.aeronaves = this.aeronaves.filter(product => product.Id_aeronave !== Id_aeronave);
    }
};
exports.AeronaveServicio = AeronaveServicio;
exports.AeronaveServicio = AeronaveServicio = __decorate([
    (0, common_1.Injectable)()
], AeronaveServicio);
//# sourceMappingURL=aeronave.services.js.map