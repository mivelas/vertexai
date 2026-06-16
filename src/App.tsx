import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './sections/Blog';
import PostDetail from './sections/PostDetail';
import './styles/global.css';

declare global {
  interface Window {
    gtag: (command: string, id: string, config?: any) => void;
  }
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-841J3VR1K5', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <div className="app">
        <Helmet>
          <title>Nexalist AI | Strategic Enterprise Intelligence & AI Consultancy</title>
          <meta name="description" content="Nexalist AI delivers enterprise-grade AI consultancy, strategic planning, and corporate training. Scale your business with actionable AI insights and strategic implementation." />
          <link rel="canonical" href="https://nexalistai.com/" />
        </Helmet>
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<PostDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
