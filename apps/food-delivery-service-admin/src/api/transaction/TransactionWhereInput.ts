import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  customerId?: IntNullableFilter;
  id?: StringFilter;
  orderId?: IntNullableFilter;
  paymentId?: IntNullableFilter;
  paymentMethod?: StringNullableFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionId?: IntNullableFilter;
};
