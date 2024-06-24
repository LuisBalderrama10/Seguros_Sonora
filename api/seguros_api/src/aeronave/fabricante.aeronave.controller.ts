// vehiculos.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FabricanteAeronaveServicio } from './fabricante.aeronave.service';
import { FabricanteAeronave } from './fabricante.aeronave.model';

@Controller('vehiculos')
export class VehiculoController {
  constructor(private readonly vehiculoServicio: VehiculoServicio) {}

  @Get()
  getAllProducts(): Vehiculo[] {
    return this.vehiculoServicio.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): Vehiculo | undefined {
    return this.vehiculoServicio.getProductById(+id);
  }

  @Post()
  createProduct(@Body() product: Vehiculo): Vehiculo {
    return this.vehiculoServicio.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct: Vehiculo): Vehiculo | undefined {
    return this.vehiculoServicio.updateProduct(+id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): void {
    this.vehiculoServicio.deleteProduct(+id);
  }
}