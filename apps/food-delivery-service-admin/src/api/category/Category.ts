import { JsonValue } from "type-fest";

export type Category = {
  categoryId: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: JsonValue;
  name: string | null;
  updatedAt: Date;
};
