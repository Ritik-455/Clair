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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or any asynchronous operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time (simulating data loading)
    }, 3000); // Simulating a 3 second delay
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Herosection />
          <About />
          <Address />
          <Tokenomics />
          <Fully />
          <Roadmap />
          <Frequent />
          <Social />
          <Footer />
        </div>
      )}

    </>
  );
}

export default App;
