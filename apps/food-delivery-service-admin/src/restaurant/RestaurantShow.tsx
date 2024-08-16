import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="menuId" source="menuId" />
        <TextField label="operatingHours" source="operatingHours" />
        <TextField label="orderHistory" source="orderHistory" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="ratings" source="ratings" />
        <TextField label="restaurantId" source="restaurantId" />
        <TextField label="restaurantName" source="restaurantName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
