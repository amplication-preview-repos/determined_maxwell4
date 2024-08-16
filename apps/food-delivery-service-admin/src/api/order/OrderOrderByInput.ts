import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryAddress?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  orderStatus?: SortOrder;
  paymentStatus?: SortOrder;
  restaurantId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
