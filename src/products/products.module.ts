import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DbProductsService } from './db_products.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, DbProductsService, PrismaService],
  exports: [DbProductsService],
})
export class ProductsModule {}
