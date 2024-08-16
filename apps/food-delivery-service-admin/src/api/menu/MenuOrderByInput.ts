import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuId?: SortOrder;
  menuItems?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
};
