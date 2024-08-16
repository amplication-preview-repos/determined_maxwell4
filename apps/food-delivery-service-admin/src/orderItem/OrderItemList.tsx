import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="menuItemId" source="menuItemId" />
        <TextField label="orderId" source="orderId" />
        <TextField label="orderItemId" source="orderItemId" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <TextField label="specialInstructions" source="specialInstructions" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
