import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/order/OrderDb.service';

@Injectable()
export class OrderService {
  constructor(private readonly db: DbService) {}

  async create(order: Prisma.OrderCreateInput) {
    return await this.db.createOrder(order);
  }
}
