import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DbService } from './OrderDb.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, DbService, PrismaService],
  exports: [OrderService, DbService],
})
export class OrderModule {}
