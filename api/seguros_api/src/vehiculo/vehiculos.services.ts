// vehiculos.service.ts
import { Injectable } from '@nestjs/common';
import { Vehiculo } from './vehiculos.model';

@Injectable()
export class VehiculoServicio {
  private vehiculos: Vehiculo[] = [];

  getAllProducts(): Vehiculo[] {
    return this.vehiculos;
  }

  getProductById(numero_serie: number): Vehiculo | undefined {
    return this.vehiculos.find(vehiculo => vehiculo.Numero_serie === numero_serie);
  }

  createProduct(vehiculo: Vehiculo): Vehiculo {
    const newProduct = { id: this.vehiculos.length + 1, ...vehiculo };
    this.vehiculos.push(newProduct);
    return newProduct;
  }

  updateProduct(numero_serie: number, updatedProduct: Vehiculo): Vehiculo | undefined {
    const index = this.vehiculos.findIndex(product => product.Numero_serie === numero_serie);
    if (index !== -1) {
      this.vehiculos[index] = { ...updatedProduct, Numero_serie: numero_serie };
      return this.vehiculos[index];
    }
    return undefined; 
  }

  deleteProduct(numero_serie: number): void {
    this.vehiculos = this.vehiculos.filter(product => product.Numero_serie !== numero_serie);
  }
}