import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DbProductsService } from './db_products.service';
import { ProductsDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DbProductsService) {}
  async addProduct(product: ProductsDto): Promise<ProductsDto> {
    return this.db.addProducts(product);
  }
  async findAll() {
    return await this.db.findAll();
  }
}
