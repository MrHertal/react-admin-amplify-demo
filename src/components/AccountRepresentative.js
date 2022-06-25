import { useState } from "react";
import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceManyField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { AmplifyFilter } from "react-admin-amplify";

const defaultQuery = "listAccountRepresentatives";

const AccountRepresentativeFilter = (props) => (
  <AmplifyFilter {...props} defaultQuery={defaultQuery}>
    <TextInput
      source="repsByPeriodAndTotal.salesPeriod"
      label="Sales period"
      alwaysOn
      resettable
    />
    <NumberInput
      source="repsByPeriodAndTotal.orderTotal.gt"
      label="Order total >"
      alwaysOn
    />
  </AmplifyFilter>
);

export const AccountRepresentativeList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List
      {...props}
      title="Account Representatives"
      filters={<AccountRepresentativeFilter setQuery={setQuery} />}
    >
      <Datagrid>
        <TextField source="id" sortable={false} />
        <NumberField
          source="orderTotal"
          sortBy={query}
          sortable={query === "repsByPeriodAndTotal"}
        />
        <TextField source="salesPeriod" sortable={false} />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const AccountRepresentativeShowTitle = ({ record }) => {
  return <span>Account Representative{record ? ` #${record.id}` : ""}</span>;
};

export const AccountRepresentativeShow = (props) => (
  <Show {...props} title={<AccountRepresentativeShowTitle />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceManyField
        reference="customers"
        target="customersByRepresentative.accountRepresentativeID"
        label="Customers"
        perPage={10}
        filter={{}}
      >
        <Datagrid>
          <TextField source="id" sortable={false} />
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
      </ReferenceManyField>
      <ReferenceManyField
        reference="orders"
        target="ordersByRepresentativeByDate.accountRepresentativeID"
        label="Orders"
        perPage={10}
        filter={{}}
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
      <NumberField source="orderTotal" />
      <TextField source="salesPeriod" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

const AccountRepresentativeEditTitle = ({ record }) => {
  return (
    <span>Edit Account Representative{record ? ` #${record.id}` : ""}</span>
  );
};

export const AccountRepresentativeEdit = (props) => (
  <Edit
    {...props}
    title={<AccountRepresentativeEditTitle />}
    transform={(data) => {
      const { customers, orders, ...rest } = data;
      return rest;
    }}
  >
    <SimpleForm>
      <TextInput source="id" disabled />
      <NumberInput source="orderTotal" />
      <TextInput source="salesPeriod" />
    </SimpleForm>
  </Edit>
);

export const AccountRepresentativeCreate = (props) => (
  <Create {...props} title="Create Account Representative">
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="orderTotal" />
      <TextInput source="salesPeriod" />
    </SimpleForm>
  </Create>
);
