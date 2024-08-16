import { InputJsonValue } from "../../types";

export type MenuCreateInput = {
  menuId?: number | null;
  menuItems?: InputJsonValue;
  restaurantId?: number | null;
};
