import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="driverId" source="driverId" />
        <TextField label="ID" source="id" />
        <TextField label="licensePlate" source="licensePlate" />
        <TextField label="model" source="model" />
        <TextField label="registrationYear" source="registrationYear" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vehicleId" source="vehicleId" />
        <TextField label="vehicleType" source="vehicleType" />
      </Datagrid>
    </List>
  );
};
