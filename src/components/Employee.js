import React, { useState } from "react";
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  List,
  required,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { AmplifyFilter } from "react-admin-amplify";
import { AmplifyPagination } from "./AmplifyPagination";

const defaultQuery = "listEmployees";

const EmployeeFilter = (props) => (
  <AmplifyFilter {...props} defaultQuery={defaultQuery}>
    <SelectInput
      source="employeesNewHire.newHire"
      label="New hire"
      choices={[
        { id: "false", name: "false" },
        { id: "true", name: "true" },
      ]}
      alwaysOn
      resettable
    />
  </AmplifyFilter>
);

export const EmployeeList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List
      {...props}
      filters={<EmployeeFilter setQuery={setQuery} />}
      pagination={<AmplifyPagination />}
    >
      <Datagrid>
        <TextField
          source="id"
          sortBy={query}
          sortable={query === "employeesNewHire"}
        />
        <TextField source="name" sortable={false} />
        <DateField source="startDate" sortable={false} />
        <TextField source="phoneNumber" sortable={false} />
        <TextField source="warehouseID" label="Warehouse" sortable={false} />
        <TextField source="jobTitle" sortable={false} />
        <TextField source="newHire" sortable={false} />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const EmployeeShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="startDate" />
      <TextField source="phoneNumber" />
      <TextField source="warehouseID" label="Warehouse" />
      <TextField source="jobTitle" />
      <TextField source="newHire" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

const validateName = [required()];
const validateStartDate = [required()];
const validatePhoneNumber = [required()];
const validateWarehouse = [required()];
const validateJobTitle = [required()];
const validateNewHire = [required()];

export const EmployeeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={validateName} />
      <DateInput source="startDate" validate={validateStartDate} />
      <TextInput source="phoneNumber" validate={validatePhoneNumber} />
      <TextInput
        source="warehouseID"
        label="Warehouse"
        validate={validateWarehouse}
      />
      <TextInput source="jobTitle" validate={validateJobTitle} />
      <SelectInput
        source="newHire"
        choices={[
          { id: "false", name: "false" },
          { id: "true", name: "true" },
        ]}
        validate={validateNewHire}
      />
    </SimpleForm>
  </Edit>
);

export const EmployeeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" validate={validateName} />
      <DateInput source="startDate" validate={validateStartDate} />
      <TextInput source="phoneNumber" validate={validatePhoneNumber} />
      <TextInput
        source="warehouseID"
        label="Warehouse"
        validate={validateWarehouse}
      />
      <TextInput source="jobTitle" validate={validateJobTitle} />
      <SelectInput
        source="newHire"
        choices={[
          { id: "false", name: "false" },
          { id: "true", name: "true" },
        ]}
        validate={validateNewHire}
      />
    </SimpleForm>
  </Create>
);
