import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto, OrderFullDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() data: OrderDto[]): Promise<void> {
    await this.orderService.createOrderService(data);
  }
}
