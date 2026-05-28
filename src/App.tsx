import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Services from './sections/Services';
import Roadmap from './sections/Roadmap';
import Contact from './sections/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
