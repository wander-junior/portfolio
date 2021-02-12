import React from 'react';
import { Link } from 'react-router-dom';

import { TitleWrapper, IntroTitle, CallToAction } from './title-styles';
import { colors, Container } from './../../styles';
import Button from '../Button';

export default function Title() {
    return (
        <TitleWrapper>
            <Container>
                <IntroTitle>Olá! Meu nome é Wander. Eu sou desenvolvedor WEB FullStack.</IntroTitle>
                <CallToAction>Conheça o meu Portfólio</CallToAction>
                <Link to='/portfolio'>
                    <Button text="Veja agora" mainColor={colors.secondary} secondaryColor={colors.tertiary} />
                </Link>
            </Container>
        </TitleWrapper>
    )
}
