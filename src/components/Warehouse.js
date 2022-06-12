import {
  ArrayField,
  ChipField,
  Create,
  Datagrid,
  DateField,
  EditButton,
  List,
  ReferenceManyField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";

export const WarehouseList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" sortable={false} />
        <ArrayField source="employees.items" label="Employees" sortable={false}>
          <SingleFieldList linkType={false}>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export const WarehouseShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceManyField
        reference="employees"
        target="employeesByWarehouse.warehouseID"
        label="Employees"
        perPage={10}
      >
        <Datagrid>
          <TextField source="id" sortable={false} />
          <TextField source="name" sortable={false} />
          <DateField source="startDate" sortable={false} />
          <TextField source="phoneNumber" sortable={false} />
          <TextField source="warehouseID" label="Warehouse" sortable={false} />
          <TextField source="jobTitle" sortable={false} />
          <TextField source="newHire" sortable={false} />
          <DateField source="createdAt" sortable={false} />
          <DateField source="updatedAt" sortable={false} />
          <ShowButton />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const WarehouseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
    </SimpleForm>
  </Create>
);
