import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="availabilityStatus" source="availabilityStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentLocation" source="currentLocation" />
        <TextField label="driverId" source="driverId" />
        <TextField label="earnings" source="earnings" />
        <TextField label="ID" source="id" />
        <TextField label="orderHistory" source="orderHistory" />
        <TextField label="ratings" source="ratings" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="vehicleDetails" source="vehicleDetails" />
      </SimpleShowLayout>
    </Show>
  );
};
