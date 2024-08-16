import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PromotionWhereInput = {
  activeStatus?: BooleanNullableFilter;
  description?: StringNullableFilter;
  discount?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  promotionId?: IntNullableFilter;
  restaurantId?: IntNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
