import { InputJsonValue } from "../../types";

export type CategoryUpdateInput = {
  categoryId?: number | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  name?: string | null;
};
