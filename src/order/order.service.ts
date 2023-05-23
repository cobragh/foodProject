import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Client } from 'src/client/dto/client.dto';
import { DbService } from 'src/order/OrderDb.service';
import { Order } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly db: DbService) {}

  async create(order: Prisma.OrderCreateInput) {
    return await this.db.createOrder(order);
  }
}
