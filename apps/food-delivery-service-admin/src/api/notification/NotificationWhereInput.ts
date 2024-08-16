import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  notificationId?: IntNullableFilter;
  readStatus?: BooleanNullableFilter;
  typeField?: "Option1";
  userId?: IntNullableFilter;
};
