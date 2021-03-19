import styled from 'styled-components';
import { colors, renderAnimation } from '../../styles';

const PortfolioWrapper = styled.div`
    padding-top: 60px;
    background: ${colors.tertiary};
    color: ${colors.quartenary};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ItemsWrapper = styled.ul`
    animation: ${renderAnimation(60)};
    animation-duration: 1s;
    display: grid;
    margin-bottom: ${props => props.isExpanded ? '0px' : '40px' };
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    @media (max-width: 770px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`;

const PortfolioTitle = styled.h1`
    animation: ${renderAnimation(40)};
    animation-duration: 1s;
    ::after {
        background: ${colors.quartenary};
        margin-bottom: 40px;    
    }
`;

export {PortfolioWrapper, ItemsWrapper, PortfolioTitle};