import Title from "./components/Title";
import Menu from "./components/Menu";
import Abilities from "./components/Abilities";

const theme = {
  colors: {
    primary: '#945FF5',
    secondary: '#5B21CD',
    tertiary: '#FEFDFE',
    quartenary: '#211D2F'
  }
}

function App() {
  return (
    <div className="App">
      <Menu theme={theme}/>
      <Title />
      <Abilities />
    </div>
  );
}

export default App;
