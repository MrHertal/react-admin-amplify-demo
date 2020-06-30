import { Amplify } from "@aws-amplify/core";
import React from "react";
import { Resource } from "react-admin";
import { AmplifyAdmin } from "react-admin-amplify";
import awsExports from "./aws-exports";
import {
  AccountRepresentativeCreate,
  AccountRepresentativeEdit,
  AccountRepresentativeList,
  AccountRepresentativeShow,
} from "./components/AccountRepresentative";
import {
  CustomerCreate,
  CustomerEdit,
  CustomerList,
  CustomerShow,
} from "./components/Customer";
import { Dashboard } from "./components/Dashboard";
import {
  EmployeeCreate,
  EmployeeEdit,
  EmployeeList,
  EmployeeShow,
} from "./components/Employee";
import {
  OrderCreate,
  OrderEdit,
  OrderList,
  OrderShow,
} from "./components/Order";
import {
  ProductCreate,
  ProductEdit,
  ProductList,
  ProductShow,
} from "./components/Product";
import { UserCreate, UserEdit, UserList, UserShow } from "./components/User";
import {
  WarehouseCreate,
  WarehouseList,
  WarehouseShow,
} from "./components/Warehouse";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyAdmin
      operations={{ queries, mutations }}
      options={{ authGroups: ["admin"] }}
      dashboard={Dashboard}
    >
      {(permissions) => [
        <Resource
          name="orders"
          list={OrderList}
          show={OrderShow}
          edit={OrderEdit}
          create={OrderCreate}
        />,
        <Resource
          name="customers"
          list={CustomerList}
          show={CustomerShow}
          edit={CustomerEdit}
          create={CustomerCreate}
        />,
        <Resource
          name="employees"
          list={EmployeeList}
          show={EmployeeShow}
          edit={EmployeeEdit}
          create={EmployeeCreate}
        />,
        <Resource
          name="warehouses"
          list={WarehouseList}
          show={WarehouseShow}
          create={WarehouseCreate}
        />,
        <Resource
          name="accountRepresentatives"
          options={{ label: "Account Reps" }}
          list={AccountRepresentativeList}
          show={AccountRepresentativeShow}
          edit={AccountRepresentativeEdit}
          create={AccountRepresentativeCreate}
        />,
        <Resource
          name="products"
          list={ProductList}
          show={ProductShow}
          edit={ProductEdit}
          create={ProductCreate}
        />,
        permissions.includes("superadmin") ? (
          <Resource
            name="users"
            list={UserList}
            show={UserShow}
            edit={UserEdit}
            create={UserCreate}
          />
        ) : null,
      ]}
    </AmplifyAdmin>
  );
}

export default App;
