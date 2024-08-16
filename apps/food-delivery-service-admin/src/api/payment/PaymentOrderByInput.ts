import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  paymentId?: SortOrder;
  paymentMethod?: SortOrder;
  paymentStatus?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
