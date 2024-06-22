// aseguradoras.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AseguradoraServicio } from './aseguradoras.services';
import { Aseguradora } from './aseguradoras.model';

@Controller('aseguradora')
export class AseguradoraController {
  constructor(private readonly aseguradoraServicio: AseguradoraServicio) {}

  @Get()
  getAllProducts(): Aseguradora[] {
    return this.aseguradoraServicio.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): Aseguradora | undefined {
    return this.aseguradoraServicio.getProductById(+id);
  }

  @Post()
  createProduct(@Body() product: Aseguradora): Aseguradora {
    return this.aseguradoraServicio.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct: Aseguradora): Aseguradora | undefined {
    return this.aseguradoraServicio.updateProduct(+id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): void {
    this.aseguradoraServicio.deleteProduct(+id);
  }
}