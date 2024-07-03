// aeronaves.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AeronaveServicio } from './aeronave.services';
import { Aeronave } from './aeronave.model';

@Controller('aeronaves')
export class AeronaveController {
  constructor(private readonly aeronaveServicio: AeronaveController) {}

  @Get()
  getAllProducts(): Aeronave[] {
    return this.aeronaveServicio.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): Aeronave | undefined {
    return this.aeronaveServicio.getProductById(+id);
  }

  @Post()
  createProduct(@Body() product: Aeronave): Aeronave {
    return this.aeronaveServicio.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() updatedProduct: Aeronave): Aeronave | undefined {
    return this.aeronaveServicio.updateProduct(+id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): void {
    this.aeronaveServicio.deleteProduct(+id);
  }
}