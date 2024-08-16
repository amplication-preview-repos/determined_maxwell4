import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VehicleWhereInput = {
  color?: StringNullableFilter;
  driverId?: IntNullableFilter;
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  model?: StringNullableFilter;
  registrationYear?: IntNullableFilter;
  vehicleId?: IntNullableFilter;
  vehicleType?: StringNullableFilter;
};
