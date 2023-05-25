import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class DbOrderService {
  constructor(private readonly prisma: PrismaService) {}
}
