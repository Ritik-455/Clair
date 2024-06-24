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
import { useEffect, useState } from 'react';
import Preloader from './Common/Preloader';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
      )}

    </>
  );
}

export default App;
