import React from 'react';
import { NavLink } from 'react-router-dom';

import {MenuWrapper, MenuUl, MenuItem, SandwichMenu, Flex} from './menu-styles';



export default function Menu() {
    const [isActive, setIsActive] = React.useState(false);
    
    const handleButtonClick = () => {
        setIsActive(true);
    }

    return (
        <>
            <Flex>
                <SandwichMenu isActive={isActive} onClick={handleButtonClick}/>
            </Flex>
            <MenuWrapper isActive={isActive}>
                <MenuUl>
                    <MenuItem><NavLink to='/'>HOME</NavLink></MenuItem>
                    <MenuItem><NavLink to='/sobre'>SOBRE</NavLink></MenuItem>
                    <MenuItem><NavLink to='/portfolio'>PORTFÓLIO</NavLink></MenuItem>
                    <MenuItem><NavLink to='/contato'>CONTATO</NavLink></MenuItem>
                </MenuUl>
            </MenuWrapper>
        </>
    )
}
