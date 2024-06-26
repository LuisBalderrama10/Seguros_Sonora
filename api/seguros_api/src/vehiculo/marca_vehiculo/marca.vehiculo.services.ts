// marcaVehiculo.service.ts
import { Injectable } from '@nestjs/common';
import { MarcaVehiculo } from './marca.vehiculo.model';

@Injectable()
export class MarcaVehiculoServicio {
  private marcavehiculos: MarcaVehiculo[] = [];

  getAllProducts(): MarcaVehiculo[] {
    return this.marcavehiculos;
  }

  getProductById(Id_marca: number): MarcaVehiculo | undefined {
    return this.marcavehiculos.find(marcavehiculo => marcavehiculo.Id_marca === Id_marca);
  }

  createProduct(marcavehiculo: MarcaVehiculo): MarcaVehiculo {
    const newProduct = { id: this.marcavehiculos.length + 1, ...marcavehiculo };
    this.marcavehiculos.push(newProduct);
    return newProduct;
  }

  updateProduct(Id_marca: number, updatedProduct: MarcaVehiculo): MarcaVehiculo | undefined {
    const index = this.marcavehiculos.findIndex(product => product.Id_marca === Id_marca);
    if (index !== -1) {
      this.marcavehiculos[index] = { ...updatedProduct, Id_marca: Id_marca };
      return this.marcavehiculos[index];
    }
    return undefined; 
  }

  deleteProduct(Id_marca: number): void {
    this.marcavehiculos = this.marcavehiculos.filter(product => product.Id_marca !== Id_marca);
  }
}