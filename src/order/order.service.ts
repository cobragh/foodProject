import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { OrderDto, OrderFullDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly product: ProductsService) {}
  async createOrderService(data: OrderDto[]): Promise<void> {
    let price = [];
    data.map(async (order) => {
      const product = await this.product.findOne(order.product);

      price.push(product.price * order.quantity.valueOf());
      const total = price.reduce((sum, order) => {
        sum + order.price, 0;
      });
    });
    console.log(price);
  }
}
