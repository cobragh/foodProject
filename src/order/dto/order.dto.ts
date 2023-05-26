import { AnyObject } from 'mongoose';

export interface OrderDto {
  product: number | string;
  quantity: number;
  observation?: String;
}
