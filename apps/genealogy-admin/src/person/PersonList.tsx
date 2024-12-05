import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"People"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lastName" source="lastName" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="dateOfDeath" source="dateOfDeath" />
        <TextField label="biography" source="biography" />
        <TextField label="firstName" source="firstName" />
        <TextField label="gender" source="gender" />
      </Datagrid>
    </List>
  );
};
