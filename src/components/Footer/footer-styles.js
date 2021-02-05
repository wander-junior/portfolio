import styled from 'styled-components'

import { colors } from '../../styles.js';

const FooterWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    background: ${colors.primary};
`

const SocialLink = styled.a`
    padding-right: 30px;
    padding-left: 30px;
`;

export { FooterWrapper, SocialLink }