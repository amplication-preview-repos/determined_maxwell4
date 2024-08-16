import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MenuList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Menus"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="menuId" source="menuId" />
        <TextField label="menuItems" source="menuItems" />
        <TextField label="restaurantId" source="restaurantId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};