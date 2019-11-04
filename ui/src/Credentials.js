import React from 'react'
import { List, Edit, Create, Datagrid, SimpleForm, TextField, BooleanField, NumberField, SelectField, ChipField, DisabledInput, TextInput, LongTextInput, NumberInput, BooleanInput, SelectInput, EditButton } from 'react-admin'


export const CredentialsList = (props) => (

    <List {...props}>
        <Datagrid>
            <TextField label="ID" source="id" />
            <TextField label="Username" source="username" />
            <ChipField label="Active" source="active" />
        </Datagrid>
    </List>

)

