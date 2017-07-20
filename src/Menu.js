// in src/Menu.js
import React from 'react';
import { MenuItemLink, ReferenceField, SelectInput } from 'admin-on-rest';

export default ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/users" primaryText="Users" onTouchTap={onMenuTap} />
        <MenuItemLink to="/realms" primaryText="Realms" onTouchTap={onMenuTap} />

        {logout}
    </div>
);