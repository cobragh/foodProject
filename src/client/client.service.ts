import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Client } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly db: DbService) {}

  async createUser(): Promise<Client> {
    await thi;
  }
}
