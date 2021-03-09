import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {MenuWrapper, MenuUl, MenuItem, SandwichMenu, Flex, MarginFix} from './menu-styles';

export default function Menu() {
    const [isActive, setIsActive] = React.useState(false);
    
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsActive(false);
                }
            }

            document.addEventListener('mousedown', handleClickOutside);
            
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        }, [ref])
    }
    
    const wrapperRef = React.useRef(null);
    useOutsideAlerter(wrapperRef);

    const handleButtonClick = () => {
        setIsActive(true);
    }

    return (
        <>
            <Flex>
                <SandwichMenu isActive={isActive} onClick={handleButtonClick}/>
            </Flex>
            <MenuWrapper isActive={isActive} ref={wrapperRef}>
                <MenuUl>
                    <MenuItem><NavLink to='/'>HOME</NavLink></MenuItem>
                    <MenuItem><NavLink to='/sobre'>SOBRE</NavLink></MenuItem>
                    <MenuItem><NavLink to='/portfolio'>PORTFÓLIO</NavLink></MenuItem>
                    <MenuItem><NavLink to='/contato'>CONTATO</NavLink></MenuItem>
                </MenuUl>
            </MenuWrapper>
            <MarginFix isActive={isActive} />
        </>
    )
}
