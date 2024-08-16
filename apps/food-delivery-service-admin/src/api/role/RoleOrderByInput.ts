import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  permissions?: SortOrder;
  roleId?: SortOrder;
  roleName?: SortOrder;
  updatedAt?: SortOrder;
};
