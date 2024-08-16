import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const MenuItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="availabilityStatus"
          label="availabilityStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <div />
        <NumberInput step={1} label="menuId" source="menuId" />
        <NumberInput step={1} label="menuItemId" source="menuItemId" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
