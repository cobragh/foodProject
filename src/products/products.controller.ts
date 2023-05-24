import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  async addProduct(@Body() product: ProductsDto): Promise<ProductsDto> {
    return this.productsService.addProduct(product);
  }

  @Get()
  async findAll(): Promise<ProductsDto[]> {
    return await this.productsService.findAll();
  }
}
