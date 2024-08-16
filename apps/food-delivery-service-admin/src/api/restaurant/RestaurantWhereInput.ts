import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  menuId?: IntNullableFilter;
  operatingHours?: JsonFilter;
  orderHistory?: JsonFilter;
  phoneNumber?: StringNullableFilter;
  ratings?: IntNullableFilter;
  restaurantId?: IntNullableFilter;
  restaurantName?: StringNullableFilter;
  userId?: IntNullableFilter;
};
