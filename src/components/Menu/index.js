import React from 'react'
import styled from 'styled-components'
import styles from '../../styles.js';

export default function Menu() {
    
    const MenuWrapper = styled.nav`
        background: ${styles.theme.colors.primary};

    `;
    
    const Menu = styled.ul`
        display: flex;
        ${styles.theme.containerConfigs}
    `;

    const MenuItem = styled.li`
        color: ${styles.theme.colors.tertiary};
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
