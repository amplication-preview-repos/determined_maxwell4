import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <NumberInput step={1} label="menuId" source="menuId" />
        <div />
        <div />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <NumberInput step={1} label="ratings" source="ratings" />
        <NumberInput step={1} label="restaurantId" source="restaurantId" />
        <TextInput label="restaurantName" source="restaurantName" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
