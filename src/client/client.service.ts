import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClientDb } from './ClientDb.service';

@Injectable()
export class ClientService {
  constructor(private readonly db: ClientDb) {}

  async createUser(client_name: Prisma.ClientCreateInput): Promise<Client> {
    return await this.db.createClient(client_name);
  }
}
