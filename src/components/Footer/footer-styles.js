import styled from 'styled-components'

import { colors } from '../../styles.js';

const FooterWrapper = styled.footer`
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    background: ${colors.primary};

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

const SocialLink = styled.a`
    padding-right: 30px;
    padding-left: 30px;
`;

export { FooterWrapper, SocialLink }