import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
