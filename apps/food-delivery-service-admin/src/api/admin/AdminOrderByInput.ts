import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  adminId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  permissions?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
