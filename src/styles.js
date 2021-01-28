const styles = {
    theme: {
        colors: {
            primary: '#945FF5',
            secondary: '#5B21CD',
            tertiary: '#FEFDFE',
            quartenary: '#211D2F'
        },
        containerConfigs: `
            max-width: 1170px;
            margin: 0 auto;
        `,
        typoSizes: {
            small: '18px',
            medium: '24px',
            big: '36px',
        }
    }
}

const colors = styles.theme.colors;
const containerConfigs = styles.theme.containerConfigs;
const typoSizes = styles.theme.typoSizes;

export {
    colors,
    containerConfigs,
    typoSizes
};

export default styles;