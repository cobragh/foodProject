import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/client/client.service';
import { ProductsService } from 'src/products/products.service';
import { FinalOrderDto } from './dto/finalOrder.dto';
import { OrderDtoFull } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly product: ProductsService,
    private readonly client: ClientService,
  ) {}
  async createOrderService(data: OrderDtoFull): Promise<FinalOrderDto> {
    let totalValue = 0;
    let unitValue = 0;
    let orderOrder = {};
    const productsInfo = [];
    let client = null;
    for (const order of data.order) {
      const product = await this.product.findOne(order.product as number);
      const price = product.price;
      const quantity = order.quantity;
      totalValue += price * quantity;
      unitValue = price * quantity;
      orderOrder = {
        product: product.name,
        price: `R$: ${product.price.toFixed(2)}`,
        quantity: order.quantity,
        unitValue: `R$: ${unitValue.toFixed(2)}`,
      };
      productsInfo.push(orderOrder);
      if (data.telefone != null) {
        client = await this.client.getClient(data.telefone);
      }
    }
    return {
      order: productsInfo,
      client,
      totalValue: `R$: ${totalValue.toFixed(2)}`,
    };
  }
}
