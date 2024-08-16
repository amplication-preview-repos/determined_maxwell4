import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="deliveryAddress" source="deliveryAddress" />
        <TextField label="driverId" source="driverId" />
        <TextField label="ID" source="id" />
        <TextField label="orderId" source="orderId" />
        <TextField label="orderStatus" source="orderStatus" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <TextField label="restaurantId" source="restaurantId" />
        <TextField label="totalPrice" source="totalPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
