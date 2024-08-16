import { InputJsonValue } from "../../types";

export type RestaurantUpdateInput = {
  address?: string | null;
  menuId?: number | null;
  operatingHours?: InputJsonValue;
  orderHistory?: InputJsonValue;
  phoneNumber?: string | null;
  ratings?: number | null;
  restaurantId?: number | null;
  restaurantName?: string | null;
  userId?: number | null;
};
