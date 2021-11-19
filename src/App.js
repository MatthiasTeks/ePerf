import Navbar from './components/primary/Navbar.js'
import Merch from './components/primary/Merch.js'
import ProductSlider from './components/primary/ProductSlider.js'
import Banner from './components/primary/Banner.js'
import MerchSecond from './components/primary/MerchSecond.js'
import Footer from './components/primary/Footer.js'
import './style.css';
import 'normalize.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Merch />
      <Banner />
      <ProductSlider />
      <MerchSecond />
      <ProductSlider />
      <Footer />
    </div>
  );
}

export default App;
