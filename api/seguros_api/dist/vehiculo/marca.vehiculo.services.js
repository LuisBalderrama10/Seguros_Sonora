"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaVehiculoServicio = void 0;
const common_1 = require("@nestjs/common");
let MarcaVehiculoServicio = class MarcaVehiculoServicio {
    constructor() {
        this.marcavehiculos = [];
    }
    getAllProducts() {
        return this.marcavehiculos;
    }
    getProductById(Id_marca) {
        return this.marcavehiculos.find(marcavehiculo => marcavehiculo.Id_marca === Id_marca);
    }
    createProduct(marcavehiculo) {
        const newProduct = { id: this.marcavehiculos.length + 1, ...marcavehiculo };
        this.marcavehiculos.push(newProduct);
        return newProduct;
    }
    updateProduct(Id_marca, updatedProduct) {
        const index = this.marcavehiculos.findIndex(product => product.Id_marca === Id_marca);
        if (index !== -1) {
            this.marcavehiculos[index] = { ...updatedProduct, Id_marca: Id_marca };
            return this.marcavehiculos[index];
        }
        return undefined;
    }
    deleteProduct(Id_marca) {
        this.marcavehiculos = this.marcavehiculos.filter(product => product.Id_marca !== Id_marca);
    }
};
exports.MarcaVehiculoServicio = MarcaVehiculoServicio;
exports.MarcaVehiculoServicio = MarcaVehiculoServicio = __decorate([
    (0, common_1.Injectable)()
], MarcaVehiculoServicio);
//# sourceMappingURL=marca.vehiculo.services.js.map