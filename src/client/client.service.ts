import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/order/OrderDb.service';
import { ClientDb } from './ClientDb.service';
import { Client } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly db: ClientDb) {}

  async createUser(client_name: Prisma.ClientCreateInput): Promise<Client> {
    return await this.db.createClient(client_name);
  }
}
