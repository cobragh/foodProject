import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientDto, ProductsDto } from './dto/client.dto';

@Injectable()
export class DbClientService {
  constructor(private readonly prisma: PrismaService) {}
  async addClient(data: ClientDto): Promise<ClientDto> {
    await this.prisma.client.create({ data });
    return data;
  }
}
