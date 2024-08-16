import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MenuWhereInput = {
  id?: StringFilter;
  menuId?: IntNullableFilter;
  menuItems?: JsonFilter;
  restaurantId?: IntNullableFilter;
};
