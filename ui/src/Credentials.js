import React from 'react'
import { List, Edit, Create, Datagrid, SimpleForm, TextField, BooleanField, NumberField, SelectField, ChipField, DisabledInput, TextInput, LongTextInput, NumberInput, BooleanInput, SelectInput, EditButton, Show, SimpleShowLayout, ShowButton } from 'react-admin'


export const CredentialsListComponent = (props) => (

    <List {...props}>
        <Datagrid>
            <TextField label="ID" source="id" />
            <TextField label="Username" source="username" />
            <ChipField label="Active" source="active" />
            <ShowButton />
        </Datagrid>
    </List>

)


export const CredentialShowComponent = (props) => (

    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="ID" source="id" />
            <TextField label="Username" source="username" />
            <TextField label="Password" source="password" />
            <ChipField label="Active" source="active" />
            <TextField label="Private Key" source="private_key" />
            <TextField label="Public Key" source="public_key" />
        </SimpleShowLayout>
    </Show>

)


export const CredentialCreateComponent = (props) => (

    <Create {...props}>
        <SimpleForm>
            <TextInput label="Username" source="username" />
            <TextInput label="Password" source="password" />
            <LongTextInput label="Private Key" source="private_key" />
            <LongTextInput label="Public Key" source="public_key" />
            <SelectInput label="Active" choices={[{id: 'true', name: 'True'}, {id: 'false', name: 'False'}]} source="active" />
        </SimpleForm>
    </Create>

)