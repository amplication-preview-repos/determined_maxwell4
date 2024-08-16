export type PaymentUpdateInput = {
  amount?: number | null;
  customerId?: number | null;
  orderId?: number | null;
  paymentId?: number | null;
  paymentMethod?: string | null;
  paymentStatus?: "Option1" | null;
  transactionDate?: Date | null;
};
