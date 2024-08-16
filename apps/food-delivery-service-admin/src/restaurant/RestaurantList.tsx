import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Restaurants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
