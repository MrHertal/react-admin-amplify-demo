import { useState } from "react";
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

const defaultQuery = "listProducts";

const ProductFilter = (props) => (
  <AmplifyFilter {...props} defaultQuery={defaultQuery}>
    <TextInput source="productsByName.name" label="Name" alwaysOn resettable />
  </AmplifyFilter>
);

export const ProductList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List {...props} filters={<ProductFilter setQuery={setQuery} />}>
      <Datagrid>
        <TextField
          source="id"
          sortBy={query}
          sortable={query === "productsByName"}
        />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceManyField
        reference="orders"
        target="ordersByProduct.productID"
        label="Orders"
        perPage={10}
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
          <DateField source="date" sortable={false} />
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

export const ProductEdit = (props) => (
  <Edit
    {...props}
    transform={(data) => {
      const { orders, ...rest } = data;
      return rest;
    }}
  >
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={validateName} />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" validate={validateName} />
    </SimpleForm>
  </Create>
);
