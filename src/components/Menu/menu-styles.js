import styled from 'styled-components'
import { colors, containerConfigs, typoSizes } from '../../styles.js';

const MenuWrapper = styled.nav`
    background: ${colors.primary};
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

export {
    MenuWrapper,
    MenuUl,
    MenuItem
}