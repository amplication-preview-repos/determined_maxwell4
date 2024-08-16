import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CategoryWhereInput = {
  categoryId?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  name?: StringNullableFilter;
};
