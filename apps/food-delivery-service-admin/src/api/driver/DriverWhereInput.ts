import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DriverWhereInput = {
  availabilityStatus?: "Option1";
  currentLocation?: JsonFilter;
  driverId?: IntNullableFilter;
  earnings?: IntNullableFilter;
  id?: StringFilter;
  orderHistory?: JsonFilter;
  ratings?: IntNullableFilter;
  userId?: IntNullableFilter;
  vehicleDetails?: JsonFilter;
};
