import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const MenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="menuId" source="menuId" />
        <div />
        <NumberInput step={1} label="restaurantId" source="restaurantId" />
      </SimpleForm>
    </Create>
  );
};
