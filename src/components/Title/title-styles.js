import styled from 'styled-components';
import { colors, containerConfigs, typoSizes } from '../../styles';

const TitleWrapper = styled.div`
    ${containerConfigs}
    background: ${colors.tertiary};
    color: ${colors.quartenary};
`;

const IntroTitle = styled.h1`
    margin-top: 80px;
    max-width: 550px;
    ::after {
        background: ${colors.quartenary};
    }
`;

const CallToAction = styled.h1`
    font-size: ${typoSizes.medium};
    margin: 0 auto;
`;

export {
    TitleWrapper,
    IntroTitle,
    CallToAction
}