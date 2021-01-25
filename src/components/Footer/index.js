import React from 'react'
import styled from 'styled-components'
import githubIcon from '../../assets/img/github.svg'
import linkedinIcon from '../../assets/img/linkedin.svg'
import styles from '../../styles.js';


export default function Footer() {
    const FooterWrapper = styled.div`
        background: ${styles.theme.colors.primary}
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
