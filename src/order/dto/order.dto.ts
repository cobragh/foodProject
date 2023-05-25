export interface OrderDto {
  product: number;
  quantity: number;
  observation?: String;
}

export interface OrderFullDto {
  order: OrderDto[];
}
