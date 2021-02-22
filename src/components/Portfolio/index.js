import React from 'react';
import { Link } from 'react-router-dom';

import { PortfolioWrapper, ItemsWrapper } from './portfolio-styles';
import { colors, Container } from '../../styles.js';
import Button from '../Button';
import PortfolioItem from './PortfolioItem';

export default function Portfolio() {
    return (
        <Container>
            <PortfolioWrapper>
                <h1>Portfólio</h1>
                <ItemsWrapper>
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </ItemsWrapper>
                <Link to='/portfolio'>
                    <Button text="Veja mais" mainColor={colors.primary} secondaryColor={colors.tertiary} />
                </Link>
            </PortfolioWrapper>
        </Container>
    )
}
