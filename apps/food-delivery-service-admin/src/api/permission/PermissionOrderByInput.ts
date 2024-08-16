import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  permissionId?: SortOrder;
  permissionName?: SortOrder;
  updatedAt?: SortOrder;
};
