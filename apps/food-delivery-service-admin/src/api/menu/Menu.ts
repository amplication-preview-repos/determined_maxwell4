import { JsonValue } from "type-fest";

export type Menu = {
  createdAt: Date;
  id: string;
  menuId: number | null;
  menuItems: JsonValue;
  restaurantId: number | null;
  updatedAt: Date;
};
