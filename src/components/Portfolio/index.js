import React from 'react';
import { Link } from 'react-router-dom';

import { PortfolioWrapper } from './portfolio-styles';
import { colors, Container } from '../../styles.js';
import Button from '../Button';

export default function Portfolio() {
    return (
        <Container>
            <PortfolioWrapper>
                <h1>Portfólio</h1>
                <Link to='/portfolio'>
                    <Button text="Veja mais" mainColor={colors.primary} secondaryColor={colors.tertiary} />
                </Link>
            </PortfolioWrapper>
        </Container>
    )
}
