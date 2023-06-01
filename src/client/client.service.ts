import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { DbClientService } from './db_client.service';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly db: DbClientService) {}

  async addClient(client: ClientDto): Promise<ClientDto> {
    return await this.db.addClient(client);
  }

  async updateClient(client: ClientDto): Promise<ClientDto> {
    return await this.db.updateClient(client);
  }

  async deleteClient(client: ClientDto): Promise<string> {
    return await this.db.deleteClient(client);
  }

  async getClient(telefone: string): Promise<ClientDto> {
    return await this.db.getClient(telefone);
  }

  async getAllClients(): Promise<Array<ClientDto>> {
    return await this.db.getAllClients();
  }
}
