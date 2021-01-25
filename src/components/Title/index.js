import React from 'react'
import styled from 'styled-components'
import styles from '../../styles.js';

export default function Title() {
    
    const TitleWrapper = styled.div`
        background: ${styles.theme.colors.tertiary};
        color: ${styles.theme.colors.quartenary};
    `;
    
    return (
        <TitleWrapper>
            <h1>Olá! Meu nome é Wander e eu sou desenvolvedor WEB FullStack.</h1>
            <h2>Conheça o meu Portfólio</h2>
            <button>Veja agora</button>
        </TitleWrapper>
    )
}
