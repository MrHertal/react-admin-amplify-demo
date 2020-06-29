import React, { useState } from "react";
import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  NumberField,
  ReferenceManyField,
  required,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { AmplifyFilter } from "react-admin-amplify";
import { AmplifyPagination } from "./AmplifyPagination";

const defaultQuery = "listCustomers";

const CustomerFilter = (props) => (
  <AmplifyFilter {...props} defaultQuery={defaultQuery}>
    <TextInput
      source="customersByRepresentative.accountRepresentativeID"
      label="Account representative"
      alwaysOn
      resettable
    />
  </AmplifyFilter>
);

export const CustomerList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List
      {...props}
      filters={<CustomerFilter setQuery={setQuery} />}
      pagination={<AmplifyPagination />}
    >
      <Datagrid>
        <TextField
          source="id"
          sortBy={query}
          sortable={query === "customersByRepresentative"}
        />
        <TextField source="name" sortable={false} />
        <TextField source="phoneNumber" sortable={false} />
        <TextField
          source="accountRepresentativeID"
          label="Account representative"
          sortable={false}
        />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const CustomerShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="phoneNumber" />
      <TextField
        source="accountRepresentativeID"
        label="Account representative"
      />
      <ReferenceManyField
        reference="orders"
        target="ordersByCustomerByDate.customerID"
        label="Orders"
        perPage={10}
        pagination={<AmplifyPagination />}
      >
        <Datagrid>
          <TextField source="id" sortable={false} />
          <TextField source="customerID" label="Customer" sortable={false} />
          <TextField
            source="accountRepresentativeID"
            label="Account representative"
            sortable={false}
          />
          <TextField source="productID" label="Product" sortable={false} />
          <TextField source="status" sortable={false} />
          <NumberField source="amount" sortable={false} />
          <DateField
            source="date"
            sortBy="ordersByCustomerByDate"
            sortable={true}
          />
          <DateField source="createdAt" sortable={false} />
          <DateField source="updatedAt" sortable={false} />
          <ShowButton />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

const validateName = [required()];
const validateAccountRepresentative = [required()];

export const CustomerEdit = (props) => (
  <Edit
    {...props}
    transform={(data) => {
      const { ordersByDate, ordersByStatusDate, ...rest } = data;
      return rest;
    }}
  >
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={validateName} />
      <TextInput source="phoneNumber" />
      <TextInput
        source="accountRepresentativeID"
        label="Account representative"
        validate={validateAccountRepresentative}
      />
    </SimpleForm>
  </Edit>
);

export const CustomerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" validate={validateName} />
      <TextInput source="phoneNumber" />
      <TextInput
        source="accountRepresentativeID"
        label="Account representative"
        validate={validateAccountRepresentative}
      />
    </SimpleForm>
  </Create>
);
