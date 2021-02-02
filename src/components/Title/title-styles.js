import styled from 'styled-components';
import { colors, containerConfigs, typoSizes } from '../../styles';

const TitleWrapper = styled.div`
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

const CallToAction = styled.p`
    font-size: ${typoSizes.medium};
    padding-bottom: 40px;
    margin: 0 auto;
`;

const Container = styled.div`
    ${containerConfigs}
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
`;

export {
    TitleWrapper,
    IntroTitle,
    CallToAction, 
    Container
}