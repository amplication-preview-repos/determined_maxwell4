import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="adminId" source="adminId" />
        <div />
        <TextInput label="role" source="role" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
