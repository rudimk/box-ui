import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider.js'
import { CredentialsList } from './Credentials.js'


const App = () => (

  <Admin title="Box" dataProvider={dataProvider}>
    <Resource name="credentials" list={CredentialsList} />
  </Admin>
)

export default App