import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  availabilityStatus?: SortOrder;
  createdAt?: SortOrder;
  currentLocation?: SortOrder;
  driverId?: SortOrder;
  earnings?: SortOrder;
  id?: SortOrder;
  orderHistory?: SortOrder;
  ratings?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vehicleDetails?: SortOrder;
};
