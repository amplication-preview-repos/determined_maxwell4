import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OrderItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="menuItemId" source="menuItemId" />
        <NumberInput step={1} label="orderId" source="orderId" />
        <NumberInput step={1} label="orderItemId" source="orderItemId" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput
          label="specialInstructions"
          multiline
          source="specialInstructions"
        />
      </SimpleForm>
    </Create>
  );
};
