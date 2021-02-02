import styled from 'styled-components'
import styles from '../../styles.js';

const MenuWrapper = styled.nav`
    background: ${styles.theme.colors.primary};
`;

const MenuUl = styled.ul`
    ${styles.theme.containerConfigs}
`;

const MenuItem = styled.li`
    color: ${styles.theme.colors.tertiary};
    margin-right: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: ${styles.theme.typoSizes.medium};
`;

export {
    MenuWrapper,
    MenuUl,
    MenuItem
}