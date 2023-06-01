import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class DbClientService {
  constructor(private readonly prisma: PrismaService) {}

  async addClient(data: ClientDto): Promise<ClientDto> {
    await this.prisma.client.create({ data });
    return data;
  }

  async updateClient(data: ClientDto): Promise<ClientDto> {
    await this.prisma.client.update({
      where: { telefone: data.telefone },
      data,
    });
    return data;
  }

  async deleteClient(data: ClientDto): Promise<string> {
    await this.prisma.client.delete({
      where: { telefone: data.telefone },
    });
    return 'Client delete successfully';
  }

  async getClient(telefone: string): Promise<ClientDto> {
    const client = await this.prisma.client.findFirst({
      where: { telefone },
      select: {
        name: true,
        endereco: true,
        telefone: true,
      },
    });
    return client;
  }

  async getAllClients(): Promise<Array<ClientDto>> {
    const clients = await this.prisma.client.findMany();
    return clients;
  }
}
