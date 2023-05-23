import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Client } from './dto/client.dto';

@Injectable()
export class ClientDb {
  constructor(private prisma: PrismaService) {}

  async createClient(data: Prisma.ClientCreateInput): Promise<Client> {
    return this.prisma.client.create({ data });
  }

  async getAllClients() {
    const clients = await this.prisma.client.findMany({});
    return clients;
  }

  async getClient(id: number) {
    const client = await this.prisma.client.findFirst({
      where: {
        id_client: id,
      },
    });
    return client;
  }
}
