import { BrowserRouter, Route } from 'react-router-dom'

import GlobalStyle from './globalStyles';
import GlobalFonts from './fonts/fonts';

import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import PortfolioPage from './pages/PortfolioPage';
import Contato from './pages/Contato';

function App() {
  return (
    <div className="App" style={{marginBottom: '143px'} }>
      <GlobalFonts />
      <GlobalStyle />
      <BrowserRouter>
        <Menu />
        <Route exact path='/' component={Home}/>
        <Route path='/sobre' component={Sobre} />
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path='/contato' component={Contato}/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
