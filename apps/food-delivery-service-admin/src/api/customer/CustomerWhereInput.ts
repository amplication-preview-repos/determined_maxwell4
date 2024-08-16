import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  customerId?: IntNullableFilter;
  favorites?: JsonFilter;
  id?: StringFilter;
  loyaltyPoints?: IntNullableFilter;
  orderHistory?: JsonFilter;
  paymentMethods?: JsonFilter;
  userId?: IntNullableFilter;
};
