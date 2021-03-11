import styled from 'styled-components';
import { colors, typoSizes } from '../../styles';

const HeaderWrapper = styled.header`
    background-image: url('/img/headerImgs/${props => props.name}.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    color: ${colors.tertiary};
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;

    & > h2 {
        font-size: ${typoSizes.small};
    }

    @media (max-width: 500px) {
        margin-top: 20px;
    }
`;

export {HeaderWrapper}