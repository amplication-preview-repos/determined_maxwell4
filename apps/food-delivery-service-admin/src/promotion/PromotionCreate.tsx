import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="activeStatus" source="activeStatus" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discount" source="discount" />
        <DateTimeInput label="endDate" source="endDate" />
        <NumberInput step={1} label="promotionId" source="promotionId" />
        <NumberInput step={1} label="restaurantId" source="restaurantId" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
