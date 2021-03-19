import styled, { keyframes } from 'styled-components';

const colors = {
    primary: '#945FF5',
    secondary: '#5B21CD',
    tertiary: '#FEFDFE',
    quartenary: '#211D2F'
}

const containerConfigs = `
    display: flex;
    max-width: 1170px;
    margin: 0 auto;

    @media (max-width: 1200px) {
        max-width: 882px;
    }

    @media (max-width: 1020px) {
        max-width: 700px;
    }

    @media (max-width: 770px) {
        max-width: 470px;
    }

    @media (max-width: 500px) {
        max-width: 400px;
    }
`   

const typoSizes = {
    small: '1.125em',
    smallLineHeight: '1.35rem',
    medium: '1.5em',
    mediumLineHeight: '1.8rem',
    large: '2.25em',
    largeLineHeight: '2.15rem'
}

const Container = styled.div`
    ${containerConfigs}
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
`;

const renderAnimation = (midPause) => keyframes`
    0%, ${midPause}% {
        opacity: 0;
        transform: translate3d(0, -20px, 0)
    }
    
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0)
    }
`

export {
    colors,
    containerConfigs,
    typoSizes,
    Container,
    renderAnimation
};