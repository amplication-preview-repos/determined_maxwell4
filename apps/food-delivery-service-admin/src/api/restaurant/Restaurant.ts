import { JsonValue } from "type-fest";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  id: string;
  menuId: number | null;
  operatingHours: JsonValue;
  orderHistory: JsonValue;
  phoneNumber: string | null;
  ratings: number | null;
  restaurantId: number | null;
  restaurantName: string | null;
  updatedAt: Date;
  userId: number | null;
};
