import styled from 'styled-components'
import { colors, containerConfigs, typoSizes } from '../../styles.js';

const MenuWrapper = styled.nav`
    background: ${colors.primary};
    min-width: 100%;

    @media (max-width: 500px) {
        display: ${props => props.isActive ? 'block' : 'none'};
    }
`;

const MenuUl = styled.ul`
    ${containerConfigs}
`;

const MenuItem = styled.li`
    color: ${colors.tertiary};
    margin-right: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: ${typoSizes.medium};
`;

const SandwichMenu = styled.button`
    display: none;

    width: 50px;
    height: 40px;
    background-color: ${colors.primary};
    border-radius: 9px;
    border: none;
    margin-top: 10px;
    margin-right: 10px;

    ::before {
        content: '';
        position: absolute;
        left: calc(100% - 50px);
        top: 20px;
        width: 30px;
        height: 1px;
        background: ${colors.tertiary};
        box-shadow:
          0 10px 0 0 ${colors.tertiary},
          0 20px 0 0 ${colors.tertiary};      
    }

    @media (max-width: 500px) {
        display: ${props => props.isActive ? 'none' : 'block'};
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export {
    Flex,
    SandwichMenu,
    MenuWrapper,
    MenuUl,
    MenuItem
}