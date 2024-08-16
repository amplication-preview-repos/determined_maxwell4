import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  paymentId?: SortOrder;
  paymentMethod?: SortOrder;
  transactionDate?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
