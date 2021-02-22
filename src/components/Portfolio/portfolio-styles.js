import styled from 'styled-components';
import { colors } from '../../styles';

const PortfolioWrapper = styled.div`
    padding-top: 60px;
    background: ${colors.tertiary};
    color: ${colors.quartenary};
`;

const ItemsWrapper = styled.div`
    display: grid;
    @media (min-width: 771px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
    }
    @media (max-width: 770px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`;

export {PortfolioWrapper, ItemsWrapper};