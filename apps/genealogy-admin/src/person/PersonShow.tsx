import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lastName" source="lastName" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="dateOfDeath" source="dateOfDeath" />
        <TextField label="biography" source="biography" />
        <TextField label="firstName" source="firstName" />
        <TextField label="gender" source="gender" />
      </SimpleShowLayout>
    </Show>
  );
};
