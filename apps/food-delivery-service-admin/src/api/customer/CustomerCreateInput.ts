import { InputJsonValue } from "../../types";

export type CustomerCreateInput = {
  customerId?: number | null;
  favorites?: InputJsonValue;
  loyaltyPoints?: number | null;
  orderHistory?: InputJsonValue;
  paymentMethods?: InputJsonValue;
  userId?: number | null;
};
