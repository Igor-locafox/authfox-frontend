
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import {  List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput , Resource} from 'admin-on-rest';
import RealmsSelector from './RealmsSelector';

export default () => (
    <Card style={{ margin: '2em' }}>
        <CardHeader title="Welcome to the administration" />
        <CardText>Lorem ipsum sic dolor amet...</CardText>
        <RealmsSelector/>
        {/*<Resource name="realms" list={RealmList} />*/}
        {/*<Resource name="realms" list={RealmList} />*/}
    </Card>
);