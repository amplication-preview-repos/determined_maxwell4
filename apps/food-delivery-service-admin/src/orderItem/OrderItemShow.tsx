import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const OrderItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="menuItemId" source="menuItemId" />
        <TextField label="orderId" source="orderId" />
        <TextField label="orderItemId" source="orderItemId" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <TextField label="specialInstructions" source="specialInstructions" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
