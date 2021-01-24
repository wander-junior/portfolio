import React from 'react'
import styled from 'styled-components'

export default function Menu({theme}) {
    
    const MenuWrapper = styled.nav`
        background: ${theme.colors.primary};

    `;
    
    const Menu = styled.ul`
        display: flex;
        ${theme.containerConfigs}
    `;

    const MenuItem = styled.li`
        color: ${theme.colors.tertiary};
        margin-right: 30px;
        padding-top: 40px;
        padding-bottom: 40px;
    `;

    return (
        <MenuWrapper>
            <Menu>
                <MenuItem>HOME</MenuItem>
                <MenuItem>SOBRE</MenuItem>
                <MenuItem>PORTFÓLIO</MenuItem>
                <MenuItem>CONTATO</MenuItem>
            </Menu>
        </MenuWrapper>
    )
}
