import { API, graphqlOperation } from "@aws-amplify/api";
import { Amplify } from "@aws-amplify/core";
import { Storage } from "@aws-amplify/storage";
import React from "react";
import { Admin, Resource } from "react-admin";
import { buildAuthProvider, buildDataProvider } from "react-admin-amplify";
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
import { LoginPage } from "./components/LoginPage";
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

const authProvider = buildAuthProvider({ authGroups: ["admin"] });

const dataProvider = buildDataProvider(
  {
    queries,
    mutations,
  },
  {
    storageBucket: awsExports.aws_user_files_s3_bucket,
    storageRegion: awsExports.aws_user_files_s3_bucket_region,
  }
);

// Get the demo user avatar
authProvider.getIdentity = async () => {
  try {
    const userData = await API.graphql(
      graphqlOperation(queries.getUser, { id: "demo" })
    );

    const url = await Storage.get(userData.data.getUser.picture.key);

    return {
      id: "demo",
      fullName: "Demo",
      avatar: url,
    };
  } catch (e) {
    console.log(e);
  }
};

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={LoginPage}
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
    </Admin>
  );
}

export default App;
