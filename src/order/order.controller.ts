import { Body, Controller, Post } from '@nestjs/common';
import { FinalOrderDto } from './dto/finalOrder.dto';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() data: OrderDto[]): Promise<FinalOrderDto> {
    return await this.orderService.createOrderService(data);
  }
}
