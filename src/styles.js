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
    medium: '1.5em',
    large: '2.25em',
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