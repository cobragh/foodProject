import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DbService } from './ProductsDb.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, DbService, PrismaService],
  exports: [ProductsService, DbService],
})
export class ProductsModule {}
