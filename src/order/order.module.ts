import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductsService } from 'src/products/products.service';
import { DbProductsService } from 'src/products/db_products.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientService } from 'src/client/client.service';
import { DbClientService } from 'src/client/db_client.service';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    ProductsService,
    DbProductsService,
    PrismaService,
    ClientService,
    DbClientService,
  ],
  exports: [OrderService],
})
export class OrderModule {}
