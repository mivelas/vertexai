import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './sections/Blog';
import PostDetail from './sections/PostDetail';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Helmet>
          <title>Nexalist AI | Strategic Enterprise Intelligence & AI Consultancy</title>
          <meta name="description" content="Nexalist AI delivers enterprise-grade AI consultancy, strategic planning, and corporate training. Scale your business with actionable AI insights and strategic implementation." />
          <link rel="canonical" href="https://nexalist-ai.com/" />
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
