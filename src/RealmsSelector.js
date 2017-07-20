import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const RealmsSelector = () => (
    <SelectField floatingLabelText="Select the realm" onChange={realmSelected} fullWidt="true">
        <MenuItem value="asdasdasd" primaryText="master" />
        <MenuItem value="asdasdasdasd" primaryText="tenant_10" />
    </SelectField>
);
RealmsSelector.defaultProps = {
    addField: true, // require a <Field> decoration
};

function realmSelected(event, key, payload) {
    alert(payload);
    
}

export default RealmsSelector;