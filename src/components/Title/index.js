import React from 'react'
import styled from 'styled-components'


export default function Title({theme}) {
    
    const TitleWrapper = styled.div`
        background: ${theme.colors.tertiary};
        color: ${theme.colors.quartenary};
    `;
    
    return (
        <TitleWrapper>
            <h1>Olá! Meu nome é Wander e eu sou desenvolvedor WEB FullStack.</h1>
            <h2>Conheça o meu Portfólio</h2>
            <button>Veja agora</button>
        </TitleWrapper>
    )
}
