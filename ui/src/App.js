import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider.js'
import { CredentialsListComponent, CredentialShowComponent, CredentialCreateComponent } from './Credentials.js'


const App = () => (

  <Admin title="Box" dataProvider={dataProvider}>
    <Resource name="credentials" list={CredentialsListComponent} show={CredentialShowComponent} create={CredentialCreateComponent} />
  </Admin>
)

export default App