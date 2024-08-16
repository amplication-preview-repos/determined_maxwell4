import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
