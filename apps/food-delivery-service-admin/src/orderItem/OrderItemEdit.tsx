import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
