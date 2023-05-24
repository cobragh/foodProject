import { Controller } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  async addClient(client: ClientDto): Promise<string> {
    await this.clientService.addClient(client);
    return 'Client registered';
  }
}
