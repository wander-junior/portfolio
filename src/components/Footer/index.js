import React from 'react';

import githubIcon from '../../assets/img/github.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';

import { FooterWrapper, SocialLink } from './footer-styles';

export default function Footer() {
    return (
        <FooterWrapper>
            <SocialLink href="https://github.com/wander-junior">
                <img src={githubIcon} alt="Ícone GitHub"/>
            </SocialLink>
            <SocialLink href="https://br.linkedin.com/in/wanderjr-cruz">
                <img src={linkedinIcon} alt="Ícone Linkedin"/>
            </SocialLink>
        </FooterWrapper>
    )
}
