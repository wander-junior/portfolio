import React from 'react'
import styled from 'styled-components'

export default function Portfolio({theme}) {
    const PortfolioWrapper = styled.div`
        background: ${theme.colors.tertiary};
        color: ${theme.colors.primary};
    `;

    return (
        <PortfolioWrapper>
            <h1>Portfólio</h1>
            <button>Veja mais</button>
        </PortfolioWrapper>
    )
}
