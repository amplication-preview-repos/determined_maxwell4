import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="favorites" source="favorites" />
        <TextField label="ID" source="id" />
        <TextField label="loyaltyPoints" source="loyaltyPoints" />
        <TextField label="orderHistory" source="orderHistory" />
        <TextField label="paymentMethods" source="paymentMethods" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
