export type TransactionCreateInput = {
  amount?: number | null;
  customerId?: number | null;
  orderId?: number | null;
  paymentId?: number | null;
  paymentMethod?: string | null;
  transactionDate?: Date | null;
  transactionId?: number | null;
};
