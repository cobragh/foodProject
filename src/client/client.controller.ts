import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('add')
  async addClient(@Body() client: ClientDto): Promise<string> {
    await this.clientService.addClient(client);
    return 'Client registered';
  }

  @Post()
  async getClientByTel(@Body() telefone: string): Promise<ClientDto> {
    const client = await this.clientService.getClient(telefone);

    return client;
  }

  @Get('all')
  async getAllClients(): Promise<Array<ClientDto>> {
    const clients = await this.clientService.getAllClients();
    return clients;
  }

  @Post('update')
  async updateClient(@Body() client: ClientDto): Promise<string> {
    await this.clientService.updateClient(client);
    return 'Client updated';
  }
}
