import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  customerId?: IntNullableFilter;
  driverId?: IntNullableFilter;
  id?: StringFilter;
  orderId?: IntNullableFilter;
  rating?: IntNullableFilter;
  restaurantId?: IntNullableFilter;
  reviewId?: IntNullableFilter;
};
