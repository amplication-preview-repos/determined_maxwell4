export type Transaction = {
  amount: number | null;
  createdAt: Date;
  customerId: number | null;
  id: string;
  orderId: number | null;
  paymentId: number | null;
  paymentMethod: string | null;
  transactionDate: Date | null;
  transactionId: number | null;
  updatedAt: Date;
};
