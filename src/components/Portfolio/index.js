import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles.js';

export default function Portfolio() {
    const PortfolioWrapper = styled.div`
        background: ${colors.tertiary};
        color: ${colors.quartenary};
    `;

    return (
        <PortfolioWrapper>
            <h1>Portfólio</h1>
            <button>Veja mais</button>
        </PortfolioWrapper>
    )
}
