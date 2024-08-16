import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput step={1} label="locationId" source="locationId" />
        <NumberInput label="longitude" source="longitude" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
