import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <NumberInput step={1} label="driverId" source="driverId" />
        <TextInput label="licensePlate" source="licensePlate" />
        <TextInput label="model" source="model" />
        <NumberInput
          step={1}
          label="registrationYear"
          source="registrationYear"
        />
        <NumberInput step={1} label="vehicleId" source="vehicleId" />
        <TextInput label="vehicleType" source="vehicleType" />
      </SimpleForm>
    </Create>
  );
};
