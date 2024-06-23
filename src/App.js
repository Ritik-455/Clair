import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosection from './Components/Herosection';
import About from './Components/About';
import Address from './Components/Address';
import Tokenomics from './Components/Tokenomics';
import Fully from './Components/Fully';
import Roadmap from './Components/Roadmap';
import Frequent from './Components/Frequent';
import Social from './Components/Social';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Herosection />
      <About />
      <Address />
      <Tokenomics />
      <Fully />
      <Roadmap />
      <Frequent />
      <Social />
      <Footer />
    </>
  );
}

export default App;
