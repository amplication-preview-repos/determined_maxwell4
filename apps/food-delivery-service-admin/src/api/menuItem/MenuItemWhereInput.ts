import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MenuItemWhereInput = {
  availabilityStatus?: "Option1";
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  menuId?: IntNullableFilter;
  menuItemId?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
