import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DriverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Drivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
