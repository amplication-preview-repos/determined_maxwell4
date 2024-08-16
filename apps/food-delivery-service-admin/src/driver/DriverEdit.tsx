import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const DriverEdit = (props: EditProps): React.ReactElement => {
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
        <div />
        <NumberInput step={1} label="driverId" source="driverId" />
        <NumberInput step={1} label="earnings" source="earnings" />
        <div />
        <NumberInput step={1} label="ratings" source="ratings" />
        <NumberInput step={1} label="userId" source="userId" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
