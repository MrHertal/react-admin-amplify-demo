import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  required,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import {
  AmplifyFileField,
  AmplifyFileInput,
  AmplifyImageField,
  AmplifyImageInput,
} from "react-admin-amplify";

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" sortable={false} />
        <TextField source="username" sortable={false} />
        <TextField source="password" sortable={false} />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="password" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <AmplifyImageField source="picture" title="Avatar" addLabel={true} />
      <AmplifyFileField
        source="documents"
        storageOptions={{ level: "private" }}
        addLabel={true}
      />
    </SimpleShowLayout>
  </Show>
);

const validateUsername = [required()];
const validatePassword = [required()];

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="username" validate={validateUsername} />
      <TextInput source="password" validate={validatePassword} />
      <AmplifyImageInput source="picture" accept="image/*" />
      <AmplifyFileInput
        source="documents"
        accept="application/pdf"
        multiple={true}
        storageOptions={{ level: "private" }}
      />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="username" validate={validateUsername} />
      <TextInput source="password" validate={validatePassword} />
      <AmplifyImageInput source="picture" accept="image/*" />
      <AmplifyFileInput
        source="documents"
        accept="application/pdf"
        multiple={true}
        storageOptions={{ level: "private" }}
      />
    </SimpleForm>
  </Create>
);
