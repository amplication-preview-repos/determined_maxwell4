import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="menuId" source="menuId" />
        <div />
        <NumberInput step={1} label="restaurantId" source="restaurantId" />
      </SimpleForm>
    </Edit>
  );
};
