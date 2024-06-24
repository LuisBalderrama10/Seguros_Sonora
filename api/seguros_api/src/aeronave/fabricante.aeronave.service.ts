// Fabricante.aeronave.service.ts
import { Injectable } from '@nestjs/common';
import { FabricanteAeronave } from './fabricante.aeronave.model';

@Injectable()
export class FabricanteAeronaveServicio {
  private fabricantesAeronaves: FabricanteAeronave[] = [];

  getAllProducts(): FabricanteAeronave[] {
    return this.fabricantesAeronaves;
  }

  getProductById(id_fabricante: number): FabricanteAeronave | undefined {
    return this.fabricantesAeronaves.find(fabricanteaeronave => fabricanteaeronave.id_fabricante === id_fabricante);
  }

  createProduct(fabricanteaeronave: FabricanteAeronave): FabricanteAeronave {
    const newProduct = { id: this.fabricantesAeronaves.length + 1, ...fabricanteaeronave };
    this.fabricantesAeronaves.push(newProduct);
    return newProduct;
  }

  updateProduct(id_fabricante: number, updatedProduct: FabricanteAeronave): FabricanteAeronave | undefined {
    const index = this.fabricantesAeronaves.findIndex(product => product.id_fabricante === id_fabricante);
    if (index !== -1) {
      this.fabricantesAeronaves[index] = { ...updatedProduct, id_fabricante: id_fabricante };
      return this.fabricantesAeronaves[index];
    }
    return undefined; 
  }

  deleteProduct(id_fabricante: number): void {
    this.fabricantesAeronaves = this.fabricantesAeronaves.filter(product => product.id_fabricante !== id_fabricante);
  }
}