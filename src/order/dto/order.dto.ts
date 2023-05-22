import { Client } from 'src/client/dto/client.dto';
import { Products } from 'src/products/dto/products.dto';

export interface Order {
  client: Client;
  product: Products;
  price: number;
  status: string;
}
