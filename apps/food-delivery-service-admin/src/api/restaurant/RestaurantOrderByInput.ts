import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  menuId?: SortOrder;
  operatingHours?: SortOrder;
  orderHistory?: SortOrder;
  phoneNumber?: SortOrder;
  ratings?: SortOrder;
  restaurantId?: SortOrder;
  restaurantName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
