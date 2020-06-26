import React, { useState } from "react";
import {
  Datagrid,
  DateField,
  DateInput,
  List,
  NumberField,
  TextField,
  TextInput,
} from "react-admin";
import { AmplifyFilter } from "react-admin-amplify";

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
    <List {...props} filters={<OrderFilter setQuery={setQuery} />}>
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
      </Datagrid>
    </List>
  );
};
