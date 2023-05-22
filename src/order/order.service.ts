import { Injectable } from '@nestjs/common';
import { Client } from 'src/client/dto/client.dto';
import { DbService } from 'src/db/db.service';
import { Order } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly db: DbService) {}

  async create(client: Client, order: Order) {
    return await this.db.createOrder(client, order);
  }
}
