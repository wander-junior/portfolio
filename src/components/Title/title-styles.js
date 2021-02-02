import styled from 'styled-components';
import { colors, containerConfigs, typoSizes } from '../../styles';

const TitleWrapper = styled.div`
    ${containerConfigs}
    background: ${colors.tertiary};
    color: ${colors.quartenary};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
`;

const IntroTitle = styled.h1`
    margin-top: 80px;
    max-width: 550px;
    ::after {
        background: ${colors.quartenary};
    }
`;

const CallToAction = styled.p`
    font-size: ${typoSizes.medium};
    padding-bottom: 40px;
    margin: 0 auto;
`;

export {
    TitleWrapper,
    IntroTitle,
    CallToAction
}