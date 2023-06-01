import { ClientDto } from 'src/client/dto/client.dto';
import { OrderDto } from './order.dto';

export interface FinalOrderDto {
  order: {};
  totalValue: string;
  client: ClientDto;
}
