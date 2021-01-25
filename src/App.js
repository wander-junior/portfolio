import Title from "./components/Title";
import Menu from "./components/Menu";
import Abilities from "./components/Abilities";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Title/>
      <Abilities/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
