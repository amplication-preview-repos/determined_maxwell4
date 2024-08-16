export type OrderItem = {
  createdAt: Date;
  id: string;
  menuItemId: number | null;
  orderId: number | null;
  orderItemId: number | null;
  price: number | null;
  quantity: number | null;
  specialInstructions: string | null;
  updatedAt: Date;
};
