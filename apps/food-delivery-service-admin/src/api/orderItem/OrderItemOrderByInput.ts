import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuItemId?: SortOrder;
  orderId?: SortOrder;
  orderItemId?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  specialInstructions?: SortOrder;
  updatedAt?: SortOrder;
};
