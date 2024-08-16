import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminWhereInput = {
  adminId?: IntNullableFilter;
  id?: StringFilter;
  permissions?: JsonFilter;
  role?: StringNullableFilter;
  userId?: IntNullableFilter;
};
