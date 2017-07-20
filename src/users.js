import React from 'react';
import {  List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.firstName} ${record.lastName}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            {/*<ReferenceInput label="User" source="userId" reference="users">*/}
                {/*<SelectInput optionText="name" />*/}
            {/*</ReferenceInput>*/}
            <TextInput source="username" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            {/*<LongTextInput source="body" />*/}
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create  {...props}>
        <SimpleForm>

            {/*<ReferenceInput label="User" source="userId" reference="users">*/}
                {/*<SelectInput optionText="name" />*/}
            {/*</ReferenceInput>*/}
            <TextInput source="username" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            {/*<LongTextInput source="body" />*/}
        </SimpleForm>
    </Create>
);
