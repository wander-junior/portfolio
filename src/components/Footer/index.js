import React from 'react'
import styled from 'styled-components'
import githubIcon from '../../assets/img/github.svg'
import linkedinIcon from '../../assets/img/linkedin.svg'

export default function Footer({theme}) {
    const FooterWrapper = styled.div`
        background: ${theme.colors.primary}
    `

    return (
        <FooterWrapper>
            <a href="https://github.com/wander-junior">
                <img src={githubIcon} alt="Ícone GitHub"/>
            </a>
            <a href="https://br.linkedin.com/in/wanderjr-cruz">
                <img src={linkedinIcon} alt="Ícone Linkedin"/>
            </a>
        </FooterWrapper>
    )
}
