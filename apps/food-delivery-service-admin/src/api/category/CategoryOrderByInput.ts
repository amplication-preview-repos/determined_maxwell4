import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
