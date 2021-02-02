import { colors, containerConfigs } from '../../styles.js';
import styled from 'styled-components';

const AbilitiesWrapper = styled.div`
    background: ${colors.primary};
    color: ${colors.tertiary};
`;

const Title = styled.h1`
    padding-top: 60px;
`;

const Container = styled.div`
    ${containerConfigs};
`;

export {AbilitiesWrapper, Title, Container};