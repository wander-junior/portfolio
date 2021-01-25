import Title from "./components/Title";
import Menu from "./components/Menu";
import Abilities from "./components/Abilities";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const theme = {
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

function App() {
  return (
    <div className="App">
      <Menu theme={theme}/>
      <Title theme={theme}/>
      <Abilities theme={theme}/>
      <Portfolio theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
