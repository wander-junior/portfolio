const styles = {
    theme: {
        colors: {
            primary: '#945FF5',
            secondary: '#5B21CD',
            tertiary: '#FEFDFE',
            quartenary: '#211D2F'
        },
        containerConfigs: `
            display: flex;
            max-width: 1170px;
            margin: 0 auto;
        `,
        typoSizes: {
            small: '1.125em',
            medium: '1.5em',
            large: '2.25em',
        }
    }
}

const theme = styles.theme;
const colors = styles.theme.colors;
const containerConfigs = styles.theme.containerConfigs;
const typoSizes = styles.theme.typoSizes;

export {
    theme,
    colors,
    containerConfigs,
    typoSizes
};

export default styles;