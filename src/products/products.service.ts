import { Injectable } from '@nestjs/common';
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
  async findOne(id: number): Promise<ProductsDto> {
    return await this.db.findById(id);
  }
}
