import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsDto } from './dto/products.dto';

@Injectable()
export class DbProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async addProducts(data: ProductsDto): Promise<ProductsDto> {
    await this.prisma.product.create({ data });
    return data;
  }
}
