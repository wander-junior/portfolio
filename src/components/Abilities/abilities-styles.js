import styles from '../../styles.js';
import styled from 'styled-components';

const AbilitiesWrapper = styled.div`
    background: ${styles.theme.colors.primary};
    color: ${styles.theme.colors.tertiary};
`;

const Title = styled.h1`
    padding-top: 60px;
`;

export {AbilitiesWrapper, Title};