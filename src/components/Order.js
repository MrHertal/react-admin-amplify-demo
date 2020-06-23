import React, { useEffect, useState } from "react";
import {
  Datagrid,
  DateField,
  DateInput,
  Filter,
  List,
  NumberField,
  TextField,
  TextInput,
} from "react-admin";

const defaultQuery = "listOrders";

const OrderFilter = ({ setQuery, ...propsRest }) => {
  const { filterValues } = propsRest;

  // Determines which query will be executed depending on the filter
  let query = defaultQuery;
  if (Object.keys(filterValues).length === 1) {
    query = Object.keys(filterValues)[0];
  }

  // Tells the list component about the query in order to know which fields are sortable
  useEffect(() => {
    setQuery(query);
  }, [query, setQuery]);

  function showFilter(queryName) {
    return query === defaultQuery || query === queryName;
  }

  // Checks if filter has a value
  function notBlank(filter) {
    return !!filter.split(".").reduce((o, i) => (!o ? o : o[i]), filterValues);
  }

  return (
    <Filter {...propsRest}>
      {showFilter("ordersByCustomerByDate") && (
        <TextInput
          source="ordersByCustomerByDate.customerID"
          label="Customer"
          alwaysOn
          onChange={(e) => {
            if (e.target.value === "") {
              // Resets all filters when blank to avoid bad request
              propsRest.setFilters({});
            }
          }}
        />
      )}
      {showFilter("ordersByCustomerByDate") &&
        notBlank("ordersByCustomerByDate.customerID") && (
          <DateInput
            source="ordersByCustomerByDate.date.eq"
            label="Date"
            alwaysOn
          />
        )}
      {showFilter("ordersByRepresentativeByDate") && (
        <TextInput
          source="ordersByRepresentativeByDate.accountRepresentativeID"
          label="Account representative"
          alwaysOn
          onChange={(e) => {
            if (e.target.value === "") {
              // Resets all filters when blank to avoid bad request
              propsRest.setFilters({});
            }
          }}
        />
      )}
      {showFilter("ordersByRepresentativeByDate") &&
        notBlank("ordersByRepresentativeByDate.accountRepresentativeID") && (
          <DateInput
            source="ordersByRepresentativeByDate.date.eq"
            label="Date"
            alwaysOn
          />
        )}
      {showFilter("ordersByProduct") && (
        <TextInput
          source="ordersByProduct.productID"
          label="Product"
          alwaysOn
          onChange={(e) => {
            if (e.target.value === "") {
              // Resets all filters when blank to avoid bad request
              propsRest.setFilters({});
            }
          }}
        />
      )}
    </Filter>
  );
};

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
