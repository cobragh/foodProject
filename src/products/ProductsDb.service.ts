import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DbService {
  constructor(private prisma: PrismaService) {}

  async createOrder(client, products) {
    return await this.prisma.order.create({
      data: { client, products },
    });
  }

  async getAllOrders() {
    const orders = await this.prisma.order.findMany({});
    return orders;
  }

  async getOrder(id: number) {
    const order = await this.prisma.order.findFirst({
      where: {
        id_order: id,
      },
    });
    return order;
  }
}
