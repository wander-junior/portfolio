import styled from 'styled-components';
import { colors, typoSizes, renderAnimation } from '../../styles';

const HeaderWrapper = styled.header`
    background-image: url('/img/headerImgs/${props => props.name}.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    color: ${colors.tertiary};
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;

    & > h1 {
        animation: ${renderAnimation(1)};
        animation-duration: 1s;
    }

    & > h2 {
        font-size: ${typoSizes.small};
        animation: ${renderAnimation(20)};
        animation-duration: 1s;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
    }
`;

export {HeaderWrapper}