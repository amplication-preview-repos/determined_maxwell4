export type OrderUpdateInput = {
  customerId?: number | null;
  deliveryAddress?: string | null;
  driverId?: number | null;
  orderId?: number | null;
  orderStatus?: "Option1" | null;
  paymentStatus?: "Option1" | null;
  restaurantId?: number | null;
  totalPrice?: number | null;
};
