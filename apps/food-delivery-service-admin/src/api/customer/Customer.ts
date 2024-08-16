import { JsonValue } from "type-fest";

export type Customer = {
  createdAt: Date;
  customerId: number | null;
  favorites: JsonValue;
  id: string;
  loyaltyPoints: number | null;
  orderHistory: JsonValue;
  paymentMethods: JsonValue;
  updatedAt: Date;
  userId: number | null;
};
