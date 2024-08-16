import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  activeStatus?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discount?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  promotionId?: SortOrder;
  restaurantId?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
