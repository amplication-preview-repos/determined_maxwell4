export type Payment = {
  amount: number | null;
  createdAt: Date;
  customerId: number | null;
  id: string;
  orderId: number | null;
  paymentId: number | null;
  paymentMethod: string | null;
  paymentStatus?: "Option1" | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
