export interface OrderDto {
  product: number | string;
  quantity: number;
  observation?: string;
}

export interface OrderDtoFull {
  order: OrderDto[];
  telefone?: string;
}
