import React from 'react';
import { Link } from 'react-router-dom';

import { PortfolioWrapper, ItemsWrapper, PortfolioTitle } from './portfolio-styles';
import { colors, Container } from '../../styles.js';
import Button from '../Button';
import PortfolioItem from './PortfolioItem';

export default function Portfolio({isExpanded}) {
    return (
        <Container>
            <PortfolioWrapper>
                <PortfolioTitle>Portfólio</PortfolioTitle>
                <ItemsWrapper isExpanded={isExpanded}>
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </ItemsWrapper>
                {!isExpanded ? 
                    <Link to='/portfolio'>
                        <Button text="Veja mais" mainColor={colors.primary} secondaryColor={colors.tertiary} />
                    </Link>
                : null}
            </PortfolioWrapper>
        </Container>
    )
}
