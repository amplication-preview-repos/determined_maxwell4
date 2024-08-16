import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
