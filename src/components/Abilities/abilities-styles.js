import { colors, typoSizes } from '../../styles.js';
import styled from 'styled-components';

const AbilitiesWrapper = styled.div`
    background: ${props => props.expanded ? colors.tertiary : colors.primary};
    color: ${props => props.expanded ? colors.quartenary : colors.tertiary};
`;

const Title = styled.h1`
    padding-top: 60px;
    :after {
        background: ${props => props.expanded ? colors.quartenary : colors.tertiary};
    }
`;

const List = styled.ul`
    display: flex;
    padding-bottom: ${props => props.expanded ? '0px' : '40px'};

    @media (max-width: 770px) {
        flex-direction: column;
    }
`;

const AboutDescription = styled.p`
    font-size: ${typoSizes.small};
    padding-top: 60px;
    text-align: center;
`;

export {AbilitiesWrapper, Title, List, AboutDescription};