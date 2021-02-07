# React Admin Amplify Demo

This project aims to demonstrate the use of [React Admin Amplify](https://github.com/MrHertal/react-admin-amplify).

The demo is accessible here: <https://master.d3os44oci7szj2.amplifyapp.com>.

Feel free to play with it!

## About React Admin Amplify

[React Admin Amplify](https://github.com/MrHertal/react-admin-amplify) is a module that connects a react-admin frontend to an Amplify backend.

It includes the data and auth providers, but also some components that make things easier to set up.

## About this demo

The schema used in this demo is a variant of the [schema with 17 patterns related to relational designs](https://docs.amplify.aws/cli/graphql-transformer/dataaccess).

## How to clone this project

If you want to use this project as a bootstrap. Follow these steps:

```sh
git clone https://github.com/MrHertal/react-admin-amplify-demo.git && cd react-admin-amplify-demo
```

Install dependencies:

```sh
yarn
```

Init Amplify project:

```sh
amplify init
```

Push project to the cloud:

```sh
amplify push
```

Do not retrieve demo user avatar and remove the custom login page:

```jsx
// in App.js

// Get the demo user avatar
// authProvider.getIdentity = async () => {
//   try {
//     const userData = await API.graphql(
//       graphqlOperation(queries.getUser, { id: "demo" })
//     );

//     const url = await Storage.get(userData.data.getUser.picture.key);

//     return {
//       id: "demo",
//       fullName: "Demo",
//       avatar: url,
//     };
//   } catch (e) {
//     console.log(e);
//   }
// };

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      // loginPage={LoginPage}
      dashboard={Dashboard}
    ></Admin>
  );
}
```

Create a user using the cognito console for example. If you want to change the status `FORCE_CHANGE_PASSWORD` of your newly created user, use the AWS cli as explained [here](https://stackoverflow.com/a/56948249/4140356).

Finally, add the user to the `admin` group.

Start the project:

```sh
yarn start
```

You should be able to login with your user.

## Learn More

See [react-admin](https://marmelab.com/react-admin/Readme.html) and [Amplify](https://docs.amplify.aws).
