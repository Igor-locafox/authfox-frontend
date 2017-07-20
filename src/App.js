import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import springRESTClient from './springRESTClient';

import { UserList, UserCreate, UserEdit } from './users';
import { RealmList } from './realms';
// import realms from './realmsReducer';


import Menu from './Menu';
import Dashboard from './Dashboard';



const App = () => (
    <Admin restClient={springRESTClient} title={"AuthFox"} dashboard={Dashboard} menu={Menu}>
        <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
        <Resource name="realms" list={RealmList} />
    </Admin>
);

export default App;