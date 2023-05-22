import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { OrderModule } from './order/order.module';
import { DbService } from './db/db.service';
import { ProductsModule } from './products/products.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [OrderModule, ProductsModule, ClientModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, DbService],
})
export class AppModule {}
