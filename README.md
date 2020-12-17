# React Admin Amplify Demo

This project aims to demonstrate the use of [React Admin Amplify](https://github.com/MrHertal/react-admin-amplify).

The demo is accessible here: <https://dev.d10isjcm6q3oja.amplifyapp.com>.

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

and remove the components LoginForm page:

```
  /*
  useEffect(() => {
    async function getDemoUser() {
      const userData = await API.graphql({
        query: getUser,
        variables: { id: "demo" },
        authMode: "AWS_IAM",
      });

      const user = userData.data.getUser;

      setDemoUsername(user.username);
      setDemoPassword(user.password);
    }

    getDemoUser().catch((e) => console.log(e));
  }, []);
  */
```

This will remove the reCaptcha. You need then to remove the pre auth trigger:

```sh
amplify update auth
Please note that certain attributes may not be overwritten if you choose to use defaults settings.

You have configured resources that might depend on this Cognito resource.  Updating this Cognito resource could have unintended side effects.

Using service: Cognito, provided by: awscloudformation
 What do you want to do? Walkthrough all the auth configurations
 Select the authentication/authorization services that you want to use: User Sign-Up, Sign-In, connected with AWS IAM controls (Enables per-user Storage features for images or other c
ontent, Analytics, and more)
 Allow unauthenticated logins? (Provides scoped down permissions that you can control via AWS IAM) Yes
 Do you want to enable 3rd party authentication providers in your identity pool? No
 Do you want to add User Pool Groups? No
 Do you want to add an admin queries API? No
 Multifactor authentication (MFA) user login options: OFF
 Email based user registration/forgot password: Enabled (Requires per-user email entry at registration)
 Please specify an email verification subject: Your verification code
 Please specify an email verification message: Your verification code is {####}
 Do you want to override the default password policy for this User Pool? No
 Specify the app's refresh token expiration period (in days): 30
 Do you want to specify the user attributes this app can read and write? No
 Do you want to enable any of the following capabilities?
 Do you want to use an OAuth flow? No
? Do you want to configure Lambda Triggers for Cognito? Yes
? Which triggers do you want to enable for Cognito
Removing resource reactadminamplifydem9cde0abfPreAuthentication...
Successfully removed resource
```

Push modifications:

```sh
amplify push
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
