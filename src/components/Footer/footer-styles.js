import styled from 'styled-components'

import { colors } from '../../styles.js';

const FooterWrapper = styled.footer`
    padding-top: 70px;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    background: ${colors.primary};

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

const SocialLink = styled.a`
    position: relative;
`;

const GitIcon = styled.img`
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 90px);
`;

const SocialLinkedinIcon = styled.img`
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% + 30px);
`;

export { FooterWrapper, SocialLink, GitIcon, SocialLinkedinIcon }