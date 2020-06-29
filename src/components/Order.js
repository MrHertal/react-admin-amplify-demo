import React, { useState } from "react";
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { AmplifyFilter } from "react-admin-amplify";
import { AmplifyPagination } from "./AmplifyPagination";

const defaultQuery = "listOrders";

const OrderFilter = (props) => (
  <AmplifyFilter {...props} defaultQuery={defaultQuery}>
    <TextInput
      source="ordersByCustomerByDate.customerID"
      label="Customer"
      alwaysOn
      resettable
    />
    <DateInput source="ordersByCustomerByDate.date.eq" label="Date" alwaysOn />
    <TextInput
      source="ordersByRepresentativeByDate.accountRepresentativeID"
      label="Account representative"
      alwaysOn
      resettable
    />
    <DateInput
      source="ordersByRepresentativeByDate.date.eq"
      label="Date"
      alwaysOn
    />
    <TextInput
      source="ordersByProduct.productID"
      label="Product"
      alwaysOn
      resettable
    />
  </AmplifyFilter>
);

export const OrderList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List
      {...props}
      filters={<OrderFilter setQuery={setQuery} />}
      pagination={<AmplifyPagination />}
    >
      <Datagrid>
        <TextField
          source="id"
          sortBy={query}
          sortable={query === "ordersByProduct"}
        />
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
          sortBy={query}
          sortable={[
            "ordersByCustomerByDate",
            "ordersByRepresentativeByDate",
          ].includes(query)}
        />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const OrderShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="customerID" label="Customer" />
      <TextField
        source="accountRepresentativeID"
        label="Account representative"
      />
      <TextField source="productID" label="Product" />
      <TextField source="status" />
      <NumberField source="amount" />
      <DateField source="date" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="customerID" label="Customer" />
      <TextInput
        source="accountRepresentativeID"
        label="Account representative"
      />
      <TextInput source="productID" label="Product" />
      <TextInput source="status" />
      <NumberInput source="amount" />
      <DateInput source="date" />
    </SimpleForm>
  </Edit>
);

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="customerID" label="Customer" />
      <TextInput
        source="accountRepresentativeID"
        label="Account representative"
      />
      <TextInput source="productID" label="Product" />
      <TextInput source="status" />
      <NumberInput source="amount" />
      <DateInput source="date" />
    </SimpleForm>
  </Create>
);
