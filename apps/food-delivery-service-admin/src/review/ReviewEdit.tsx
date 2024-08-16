import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <NumberInput step={1} label="driverId" source="driverId" />
        <NumberInput step={1} label="orderId" source="orderId" />
        <NumberInput step={1} label="rating" source="rating" />
        <NumberInput step={1} label="restaurantId" source="restaurantId" />
        <NumberInput step={1} label="reviewId" source="reviewId" />
      </SimpleForm>
    </Edit>
  );
};
