import { ClientDto } from 'src/client/dto/client.dto';

export interface FinalOrderDto {
  order: any;
  totalValue: string;
  client: ClientDto;
}
