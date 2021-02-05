import styled from 'styled-components';

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

export {
    colors,
    containerConfigs,
    typoSizes,
    Container
};