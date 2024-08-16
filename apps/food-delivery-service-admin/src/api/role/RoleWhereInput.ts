import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  permissions?: JsonFilter;
  roleId?: IntNullableFilter;
  roleName?: StringNullableFilter;
};
