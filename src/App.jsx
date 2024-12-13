import { BackgroundImg } from './Background/bgImg';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Services from './Component/Services/Service';
import About from './Component/About/About';
import Pricing from './Component/Pricing/Pricing';
import Contacts from './Component/Contacts/Contact';
import Footer from './Component/Footer/Footer';


const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div style={BackgroundImg}>
          <Navbar />
          <Hero />
        </div>
        <Services />
        <About />
        <Pricing />
        <Contacts />
        <Footer />
      </div>
    </>
  )
}

export default App
