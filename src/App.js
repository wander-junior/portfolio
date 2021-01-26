import GlobalStyle from './globalStyles';
import Title from "./components/Title";
import Menu from "./components/Menu";
import Abilities from "./components/Abilities";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu/>
      <Title/>
      <Abilities/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
