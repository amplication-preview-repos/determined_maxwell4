import { InputJsonValue } from "../../types";

export type MenuUpdateInput = {
  menuId?: number | null;
  menuItems?: InputJsonValue;
  restaurantId?: number | null;
};
