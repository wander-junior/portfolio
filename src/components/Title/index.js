import React from 'react';

import { TitleWrapper, IntroTitle, CallToAction } from './title-styles';
import {colors} from './../../styles';
import Button from '../Button';

export default function Title() {
    return (
        <TitleWrapper>
            <IntroTitle>Olá! Meu nome é Wander e eu sou desenvolvedor WEB FullStack.</IntroTitle>
            <CallToAction>Conheça o meu Portfólio</CallToAction>
            <Button text="Veja agora" mainColor={colors.secondary} secondaryColor={colors.tertiary} />
        </TitleWrapper>
    )
}
