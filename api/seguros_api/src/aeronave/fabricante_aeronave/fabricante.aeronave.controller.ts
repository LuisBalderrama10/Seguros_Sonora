// fabricante.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FabricanteAeronaveServicio } from './fabricante.aeronave.service';
import { FabricanteAeronave } from './fabricante.aeronave.model';

@Controller('faeronave')
export class FaeronvaeController {
  constructor(private readonly faeronaveServicio: FabricanteAeronaveServicio) {}

  @Get()
  getAllProducts(): FabricanteAeronave[] {
    return this.faeronaveServicio.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): FabricanteAeronave | undefined {
    return this.faeronaveServicio.getProductById(+id);
  }

  @Post()
  createProduct(@Body() product: FabricanteAeronave): FabricanteAeronave {
    return this.faeronaveServicio.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct: FabricanteAeronave): FabricanteAeronave | undefined {
    return this.faeronaveServicio.updateProduct(+id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): void {
    this.faeronaveServicio.deleteProduct(+id);
  }
}