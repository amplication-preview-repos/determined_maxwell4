import { InputJsonValue } from "../../types";

export type DriverCreateInput = {
  availabilityStatus?: "Option1" | null;
  currentLocation?: InputJsonValue;
  driverId?: number | null;
  earnings?: number | null;
  orderHistory?: InputJsonValue;
  ratings?: number | null;
  userId?: number | null;
  vehicleDetails?: InputJsonValue;
};
