import React from 'react';
import { NavLink } from 'react-router-dom';

import {MenuWrapper, MenuUl, MenuItem} from './menu-styles';

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuUl>
                <MenuItem><NavLink to='/'>HOME</NavLink></MenuItem>
                <MenuItem><NavLink to='/sobre'>SOBRE</NavLink></MenuItem>
                <MenuItem><NavLink to='/portfolio'>PORTFÓLIO</NavLink></MenuItem>
                <MenuItem><NavLink to='/contato'>CONTATO</NavLink></MenuItem>
            </MenuUl>
        </MenuWrapper>
    )
}
