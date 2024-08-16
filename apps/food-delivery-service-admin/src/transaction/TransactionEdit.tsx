import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="orderId" source="orderId" />
        <NumberInput step={1} label="paymentId" source="paymentId" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <NumberInput step={1} label="transactionId" source="transactionId" />
      </SimpleForm>
    </Edit>
  );
};
