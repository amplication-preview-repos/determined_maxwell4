import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  favorites?: SortOrder;
  id?: SortOrder;
  loyaltyPoints?: SortOrder;
  orderHistory?: SortOrder;
  paymentMethods?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
