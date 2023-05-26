import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { FinalOrderDto } from './dto/finalOrder.dto';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly product: ProductsService) {}
  async createOrderService(data: OrderDto[]): Promise<FinalOrderDto> {
    let totalValue = 0;
    let unitValue = 0;
    let orderOrder = {};
    let productsInfo = [];
    for (let order of data) {
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
    }
    return {
      products: productsInfo,
      totalValue: `R$: ${totalValue.toFixed(2)}`,
    };
  }
}
