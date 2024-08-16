import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderItemWhereInput = {
  id?: StringFilter;
  menuItemId?: IntNullableFilter;
  orderId?: IntNullableFilter;
  orderItemId?: IntNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  specialInstructions?: StringNullableFilter;
};
