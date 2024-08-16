import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  availabilityStatus?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  menuId?: SortOrder;
  menuItemId?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
