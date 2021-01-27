import React from 'react'
import {MenuWrapper, MenuUl, MenuItem} from './menu-styles';

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuUl>
                <MenuItem>HOME</MenuItem>
                <MenuItem>SOBRE</MenuItem>
                <MenuItem>PORTFÓLIO</MenuItem>
                <MenuItem>CONTATO</MenuItem>
            </MenuUl>
        </MenuWrapper>
    )
}
