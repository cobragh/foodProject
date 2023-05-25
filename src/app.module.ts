import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { DbProductsService } from './products/db_products.service';
import { ProductsModule } from './products/products.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ProductsModule, ClientModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, DbProductsService],
})
export class AppModule {}
