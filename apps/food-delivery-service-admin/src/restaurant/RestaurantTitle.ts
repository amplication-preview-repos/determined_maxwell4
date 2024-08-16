import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "restaurantName";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.restaurantName?.toString() || String(record.id);
};
