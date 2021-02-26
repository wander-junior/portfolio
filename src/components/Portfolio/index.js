import React from 'react';
import { Link } from 'react-router-dom';

import { PortfolioWrapper, ItemsWrapper, PortfolioTitle } from './portfolio-styles';
import { colors, Container } from '../../styles.js';
import Button from '../Button';
import PortfolioItem from './PortfolioItem';
import projects from '../../PortfolioData'

export default function Portfolio({isExpanded}) {
    return (
        <Container>
            <PortfolioWrapper>
                <PortfolioTitle>Portfólio</PortfolioTitle>
                <ItemsWrapper isExpanded={isExpanded}>
                    {projects.map((project, index) => {
                        // If isExpanded = True, it will show all projects
                        if (isExpanded===true) return <PortfolioItem project={project} key={project.id}/>;
                        // If isExpanded = False, it will show only the first three projects
                        if (index < 3) return <PortfolioItem project={project} key={project.id}/>;
                        return null;
                    }
                    )}
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
