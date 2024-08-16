import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="deliveryAddress" source="deliveryAddress" />
        <NumberInput step={1} label="driverId" source="driverId" />
        <NumberInput step={1} label="orderId" source="orderId" />
        <SelectInput
          source="orderStatus"
          label="orderStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="paymentStatus"
          label="paymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="restaurantId" source="restaurantId" />
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
