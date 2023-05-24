import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { DbProductsService } from './products/db_products.service';
import { ProductsModule } from './products/products.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ProductsModule, ClientModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, DbProductsService],
})
export class AppModule {}
