import React from 'react';

import githubIcon from '../../assets/img/github.svg';
import altGithubIcon from '../../assets/img/altGithub.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import altLinkedinIcon from '../../assets/img/altLinkedin.svg';

import { FooterWrapper, SocialLink, GitIcon, SocialLinkedinIcon } from './footer-styles';


export default function Footer() {
    const [linkedinOpacity, setLinkedinOpacity] = React.useState(1);
    const [gitOpacity, setGitOpacity] = React.useState(1);
    
    const handleMouseEnter = (e) => {
        if(e.target.alt === 'Ícone Linkedin') setLinkedinOpacity(0);
        if(e.target.alt === 'Ícone GitHub') setGitOpacity(0);
    }

    const handleMouseLeave = (e) => {
        if(e.target.alt === 'Ícone Linkedin') setLinkedinOpacity(1);
        if(e.target.alt === 'Ícone GitHub') setGitOpacity(1);
    }
    
    return (
        <FooterWrapper>
            <SocialLink
                href="https://github.com/wander-junior"
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <GitIcon src={githubIcon} alt="Ícone GitHub" />
                <GitIcon src={altGithubIcon} 
                    alt="Ícone GitHub" 
                    style={{opacity: `${gitOpacity}`, transition: 'opacity .2s ease'}}
                />
            </SocialLink>
            <SocialLink 
                href="https://br.linkedin.com/in/wanderjr-cruz"
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SocialLinkedinIcon src={linkedinIcon} alt="Ícone Linkedin"/>
                <SocialLinkedinIcon src={altLinkedinIcon} 
                    alt="Ícone Linkedin" 
                    style={{opacity: `${linkedinOpacity}`, transition: 'opacity .2s ease'}}
                />
            </SocialLink>
        </FooterWrapper>
    )
}
