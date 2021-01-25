import React from 'react'
import styled from 'styled-components'
import styles from '../../styles.js';

export default function Portfolio() {
    const PortfolioWrapper = styled.div`
        background: ${styles.theme.colors.tertiary};
        color: ${styles.theme.colors.quartenary};
    `;

    return (
        <PortfolioWrapper>
            <h1>Portfólio</h1>
            <button>Veja mais</button>
        </PortfolioWrapper>
    )
}
