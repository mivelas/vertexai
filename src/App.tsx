import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Roadmap from './sections/Roadmap';
import Contact from './sections/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Nexalist AI | Strategic Enterprise Intelligence & AI Consultancy</title>
        <meta name="description" content="Nexalist AI delivers enterprise-grade AI consultancy, strategic planning, and corporate training. Scale your business with actionable AI insights and strategic implementation." />
        <link rel="canonical" href="https://nexalist-ai.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Nexalist AI | Strategic Enterprise Intelligence" />
        <meta property="og:description" content="Enterprise-grade AI consultancy and strategic planning for growing businesses." />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Nexalist AI | Strategic Enterprise Intelligence" />
        <meta name="twitter:description" content="Enterprise-grade AI consultancy and strategic planning for growing businesses." />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Roadmap />
        <Contact />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
