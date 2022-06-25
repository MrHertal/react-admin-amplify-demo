import { useState } from "react";
import {
  AutocompleteInput,
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  required,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { AmplifyFilter } from "react-admin-amplify";

const defaultQuery = "listOrders";

const OrderFilter = (props) => (
  <AmplifyFilter {...props} defaultQuery={defaultQuery}>
    <TextInput
      source="ordersByCustomerByDate.customerID"
      label="Customer id"
      alwaysOn
      resettable
    />
    <DateInput source="ordersByCustomerByDate.date.eq" label="Date" alwaysOn />
    <TextInput
      source="ordersByRepresentativeByDate.accountRepresentativeID"
      label="Account representative id"
      alwaysOn
      resettable
    />
    <DateInput
      source="ordersByRepresentativeByDate.date.eq"
      label="Date"
      alwaysOn
    />
    <ReferenceInput
      source="ordersByProduct.productID"
      reference="products"
      alwaysOn
    >
      <AutocompleteInput
        label="Product"
        filterToQuery={(searchText) => ({
          productsByName: { name: searchText },
        })}
        optionText="name"
      />
    </ReferenceInput>
  </AmplifyFilter>
);

export const OrderList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List {...props} filters={<OrderFilter setQuery={setQuery} />}>
      <Datagrid>
        <TextField
          source="id"
          sortBy={query}
          sortable={query === "ordersByProduct"}
        />
        <TextField source="customerID" label="Customer id" sortable={false} />
        <TextField
          source="accountRepresentativeID"
          label="Account representative id"
          sortable={false}
        />
        <TextField source="productID" label="Product id" sortable={false} />
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
      <ReferenceField
        source="customerID"
        reference="customers"
        label="Customer"
        link="show"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        source="accountRepresentativeID"
        reference="accountRepresentatives"
        label="Account representative"
        link="show"
      >
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField
        source="productID"
        reference="products"
        label="Product"
        link="show"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="status" />
      <NumberField source="amount" />
      <DateField source="date" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

const validateCustomer = [required()];
const validateAccountRepresentative = [required()];
const validateProduct = [required()];
const validateStatus = [required()];
const validateAmount = [required()];
const validateDate = [required()];

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput
        source="customerID"
        label="Customer id"
        validate={validateCustomer}
      />
      <TextInput
        source="accountRepresentativeID"
        label="Account representative id"
        validate={validateAccountRepresentative}
      />
      <ReferenceInput
        source="productID"
        reference="products"
        validate={validateProduct}
      >
        <AutocompleteInput
          label="Product"
          filterToQuery={(searchText) => ({
            productsByName: { name: searchText },
          })}
          optionText="name"
        />
      </ReferenceInput>
      <TextInput source="status" validate={validateStatus} />
      <NumberInput source="amount" validate={validateAmount} />
      <DateInput source="date" validate={validateDate} />
    </SimpleForm>
  </Edit>
);

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput
        source="customerID"
        label="Customer id"
        validate={validateCustomer}
      />
      <TextInput
        source="accountRepresentativeID"
        label="Account representative id"
        validate={validateAccountRepresentative}
      />
      <ReferenceInput
        source="productID"
        reference="products"
        validate={validateProduct}
      >
        <AutocompleteInput
          label="Product"
          filterToQuery={(searchText) => ({
            productsByName: { name: searchText },
          })}
          optionText="name"
        />
      </ReferenceInput>
      <TextInput source="status" validate={validateStatus} />
      <NumberInput source="amount" validate={validateAmount} />
      <DateInput source="date" validate={validateDate} />
    </SimpleForm>
  </Create>
);
