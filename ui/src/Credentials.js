import React from 'react'
import { List, Edit, Create, Datagrid, SimpleForm, TextField, BooleanField, NumberField, SelectField, ChipField, DisabledInput, TextInput, LongTextInput, NumberInput, BooleanInput, SelectInput, EditButton } from 'react-admin'


export const CredentialsList = (props) => (

    <List {...props}>
        <Datagrid>
            <TextField label="ID" source="id" />
            <TextField label="Username" source="username" />
            <BooleanField label="Active" valueLabelTrue=1 valueLabelFalse=0 source="active" />
        </Datagrid>
    </List>

)

