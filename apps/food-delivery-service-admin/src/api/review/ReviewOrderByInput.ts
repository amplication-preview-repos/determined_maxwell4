import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  rating?: SortOrder;
  restaurantId?: SortOrder;
  reviewId?: SortOrder;
  updatedAt?: SortOrder;
};
