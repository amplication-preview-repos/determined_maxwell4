import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customerId?: IntNullableFilter;
  deliveryAddress?: StringNullableFilter;
  driverId?: IntNullableFilter;
  id?: StringFilter;
  orderId?: IntNullableFilter;
  orderStatus?: "Option1";
  paymentStatus?: "Option1";
  restaurantId?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
