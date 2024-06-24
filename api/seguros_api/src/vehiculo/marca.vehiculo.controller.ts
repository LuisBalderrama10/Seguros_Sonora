// marcavehiculos.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MarcaVehiculoServicio } from './marca.vehiculo.services';
import { MarcaVehiculo } from './marca.vehiculo.model';

@Controller('marcavehiculos')
export class MarcaVehiculoController {
  constructor(private readonly marcavehiculoServicio: MarcaVehiculoServicio) {}

  @Get()
  getAllProducts(): MarcaVehiculo[] {
    return this.marcavehiculoServicio.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): MarcaVehiculo | undefined {
    return this.marcavehiculoServicio.getProductById(+id);
  }

  @Post()
  createProduct(@Body() product: MarcaVehiculo): MarcaVehiculo {
    return this.marcavehiculoServicio.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct: MarcaVehiculo): MarcaVehiculo | undefined {
    return this.marcavehiculoServicio.updateProduct(+id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): void {
    this.marcavehiculoServicio.deleteProduct(+id);
  }
}