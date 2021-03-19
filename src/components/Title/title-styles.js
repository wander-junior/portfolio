import styled from 'styled-components';
import { colors, typoSizes, renderAnimation } from '../../styles';

const TitleWrapper = styled.div`
    background: ${colors.tertiary};
    color: ${colors.quartenary};
`;

const IntroTitle = styled.h1`
    margin-top: 80px;
    max-width: 550px;
    animation: ${renderAnimation(1)};
    animation-duration: 1s;
    ::after {
        background: ${colors.quartenary};
    }
`;

const CallToAction = styled.p`
    font-size: ${typoSizes.medium};
    padding-bottom: 40px;
    margin: 0 auto;
    animation: ${renderAnimation(20)};
    animation-duration: 1s;
`;

const ButtonLocalStyle = styled.div`
    animation: ${renderAnimation(40)};
    animation-duration: 1s;    
`;

export {
    TitleWrapper,
    IntroTitle,
    CallToAction,
    ButtonLocalStyle
}