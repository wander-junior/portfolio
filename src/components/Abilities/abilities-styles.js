import { colors, typoSizes, renderAnimation } from '../../styles.js';
import styled from 'styled-components';

const AbilitiesWrapper = styled.div`
    background: ${props => props.expanded ? colors.tertiary : colors.primary};
    color: ${props => props.expanded ? colors.quartenary : colors.tertiary};
`;

const Title = styled.h1`
    padding-top: 60px;
    animation: ${renderAnimation(60)};
    animation-duration: 1s;

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
    animation: ${renderAnimation(40)};
    animation-duration: 1s;
`;

export {AbilitiesWrapper, Title, List, AboutDescription};