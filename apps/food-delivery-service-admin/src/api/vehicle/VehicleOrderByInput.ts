import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  model?: SortOrder;
  registrationYear?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
  vehicleType?: SortOrder;
};
