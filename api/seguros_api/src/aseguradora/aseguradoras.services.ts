// aseguradora>.service.ts
import { Injectable } from '@nestjs/common';
import { Aseguradora } from './aseguradoras.model';

@Injectable()
export class AseguradoraServicio {
  private aseguradora: Aseguradora[] = [];

  getAllProducts(): Aseguradora[] {
    return this.aseguradora;
  }

  getProductById(id_aseguradora: number): Aseguradora | undefined {
    return this.aseguradora.find(aseguradora => aseguradora.id_aseguradora === id_aseguradora);
  }

  createProduct(aseguradora: Aseguradora): Aseguradora {
    const newProduct = { id: this.aseguradora.length + 1, ...aseguradora };
    this.aseguradora.push(newProduct);
    return newProduct;
  }

  updateProduct(id_aseguradora: number, updatedProduct: Aseguradora): Aseguradora | undefined {
    const index = this.aseguradora.findIndex(product => product.id_aseguradora === id_aseguradora);
    if (index !== -1) {
      this.aseguradora[index] = { ...updatedProduct, id_aseguradora: id_aseguradora };
      return this.aseguradora[index];
    }
    return undefined; 
  }

  deleteProduct(numero_serie: number): void {
    this.aseguradora = this.aseguradora.filter(product => product.id_aseguradora !== numero_serie);
  }
}