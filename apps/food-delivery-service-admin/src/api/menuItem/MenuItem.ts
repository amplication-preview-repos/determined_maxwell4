import { JsonValue } from "type-fest";

export type MenuItem = {
  availabilityStatus?: "Option1" | null;
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: JsonValue;
  menuId: number | null;
  menuItemId: number | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
