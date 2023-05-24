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
}
