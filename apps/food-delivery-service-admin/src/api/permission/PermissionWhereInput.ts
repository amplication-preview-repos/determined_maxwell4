import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PermissionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  permissionId?: IntNullableFilter;
  permissionName?: StringNullableFilter;
};
