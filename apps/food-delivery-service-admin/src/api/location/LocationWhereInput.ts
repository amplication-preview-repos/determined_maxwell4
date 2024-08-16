import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  locationId?: IntNullableFilter;
  longitude?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: IntNullableFilter;
};
