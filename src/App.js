import { Amplify } from "@aws-amplify/core";
import React from "react";
import { Resource } from "react-admin";
import { AmplifyAdmin } from "react-admin-amplify";
import awsExports from "./aws-exports";
import { Dashboard } from "./components/Dashboard";
import { OrderList } from "./components/Order";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyAdmin
      operations={{ queries, mutations }}
      options={{ adminGroups: ["admin", "editor"] }}
      dashboard={Dashboard}
    >
      <Resource name="orders" list={OrderList} />
    </AmplifyAdmin>
  );
}

export default App;
