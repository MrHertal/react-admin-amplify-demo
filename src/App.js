import React from "react";
import { Resource } from "react-admin";
import { AmplifyAdmin, configureAmplify } from "react-admin-amplify";
import config from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

configureAmplify(config);

function App() {
  return (
    <AmplifyAdmin
      operations={{ queries, mutations }}
      options={{ adminGroups: ["admin", "editor"] }}
    >
      <Resource name="orders" />
    </AmplifyAdmin>
  );
}

export default App;
