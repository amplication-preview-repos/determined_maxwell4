import { InputJsonValue } from "../../types";

export type CategoryCreateInput = {
  categoryId?: number | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  name?: string | null;
};
