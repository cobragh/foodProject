import { Injectable } from '@nestjs/common';
import { Order, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DbService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    return await this.prisma.order.create({
      data,
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
