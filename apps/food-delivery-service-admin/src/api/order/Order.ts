export type Order = {
  createdAt: Date;
  customerId: number | null;
  deliveryAddress: string | null;
  driverId: number | null;
  id: string;
  orderId: number | null;
  orderStatus?: "Option1" | null;
  paymentStatus?: "Option1" | null;
  restaurantId: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
