import styled from 'styled-components';
import { colors, containerConfigs } from '../../styles';

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

export {
    TitleWrapper,
    IntroTitle
}