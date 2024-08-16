import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput step={1} label="locationId" source="locationId" />
        <NumberInput label="longitude" source="longitude" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
