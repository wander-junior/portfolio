import React from 'react'

import { PortfolioWrapper } from './portfolio-styles';
import { colors, Container } from '../../styles.js';
import Button from '../Button';

export default function Portfolio() {
    return (
        <Container>
            <PortfolioWrapper>
                <h1>Portfólio</h1>
                <Button text="Veja mais" mainColor={colors.primary} secondaryColor={colors.tertiary} />
            </PortfolioWrapper>
        </Container>
    )
}
