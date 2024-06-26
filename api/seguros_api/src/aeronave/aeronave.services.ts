// aeronave.service.ts
import { Injectable } from '@nestjs/common';
import { Aeronave } from './aeronave.model';

@Injectable()
export class AeronaveServicio {
  private aeronaves: Aeronave[] = [];

  getAllProducts(): Aeronave[] {
    return this.aeronaves;
  }

  getProductById(Id_aeronave: number): Aeronave | undefined {
    return this.aeronaves.find(vehiculo => vehiculo.Id_aeronave === Id_aeronave);
  }

  createProduct(vehiculo: Aeronave): Aeronave {
    const newProduct = { id: this.aeronaves.length + 1, ...vehiculo };
    this.aeronaves.push(newProduct);
    return newProduct;
  }

  updateProduct(Id_aeronave: number, updatedProduct: Aeronave): Aeronave | undefined {
    const index = this.aeronaves.findIndex(product => product.Id_aeronave === Id_aeronave);
    if (index !== -1) {
      this.aeronaves[index] = { ...updatedProduct, Id_aeronave: Id_aeronave };
      return this.aeronaves[index];
    }
    return undefined; 
  }

  deleteProduct(Id_aeronave: number): void {
    this.aeronaves = this.aeronaves.filter(product => product.Id_aeronave !== Id_aeronave);
  }
}