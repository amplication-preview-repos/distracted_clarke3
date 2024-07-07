import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const PersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="biography" multiline source="biography" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <DateTimeInput label="dateOfDeath" source="dateOfDeath" />
        <TextInput label="firstName" source="firstName" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
