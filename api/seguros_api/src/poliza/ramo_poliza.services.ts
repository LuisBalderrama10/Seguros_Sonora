// polizas.service.ts
import { Injectable } from '@nestjs/common';
import { RamoPoliza } from './ramo_poliza.model';

@Injectable()
export class PolizaServicio {
  private ramospolizas: RamoPoliza[] = [];

  getAllProducts(): RamoPoliza[] {
    return this.ramospolizas;
  }

  getProductById(Id_ramo_poliza: number): RamoPoliza | undefined {
    return this.ramospolizas.find(poliza => poliza.Id_ramo_poliza === Id_ramo_poliza);
  }

  createProduct(poliza: RamoPoliza): RamoPoliza {
    const newProduct = { id: this.ramospolizas.length + 1, ...poliza };
    this.ramospolizas.push(newProduct);
    return newProduct;
  }

  updateProduct(Id_ramo_poliza: number, updatedProduct: RamoPoliza): RamoPoliza | undefined {
    const index = this.ramospolizas.findIndex(product => product.Id_ramo_poliza === Id_ramo_poliza);
    if (index !== -1) {
      this.ramospolizas[index] = { ...updatedProduct, Id_ramo_poliza: Id_ramo_poliza };
      return this.ramospolizas[index];
    }
    return undefined; 
  }

  deleteProduct(Id_ramo_poliza: number): void {
    this.ramospolizas = this.ramospolizas.filter(product => product.Id_ramo_poliza !== Id_ramo_poliza);
  }
}