import React from 'react';

import { TitleWrapper, IntroTitle, CallToAction } from './title-styles';

export default function Title() {
    return (
        <TitleWrapper>
            <IntroTitle>Olá! Meu nome é Wander e eu sou desenvolvedor WEB FullStack.</IntroTitle>
            <CallToAction>Conheça o meu Portfólio</CallToAction>
            <button>Veja agora</button>
        </TitleWrapper>
    )
}
