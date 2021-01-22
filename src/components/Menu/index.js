import React from 'react'
import styled from 'styled-components'

export default function Menu({theme}) {
    
    const MenuWrapper = styled.nav`
        background: ${theme.colors.primary};
    `;
    
    const MenuItem = styled.li`
        color: ${theme.colors.tertiary};
    `;

    return (
        <MenuWrapper>
            <ul>
                <MenuItem>HOME</MenuItem>
                <MenuItem>SOBRE</MenuItem>
                <MenuItem>PORTFÓLIO</MenuItem>
                <MenuItem>CONTATO</MenuItem>
            </ul>
        </MenuWrapper>
    )
}
