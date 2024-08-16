import { InputJsonValue } from "../../types";

export type MenuItemCreateInput = {
  availabilityStatus?: "Option1" | null;
  category?: string | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  menuId?: number | null;
  menuItemId?: number | null;
  name?: string | null;
  price?: number | null;
};
