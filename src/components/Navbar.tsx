import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './LogoSophisticated';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsMobileMenuOpen(false);
    
    if (target === 'home') {
      if (location.pathname !== '/') {
        // If not on home, just navigate home
        return;
      }
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        // If on blog page and clicking a hash link, go home first
        e.preventDefault();
        navigate('/' + target);
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-link" onClick={(e) => handleLinkClick(e as any, 'home')}>
          <Logo size={48} />
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="/#benefits" onClick={(e) => handleLinkClick(e, '#benefits')}>Benefits</a>
          <a href="/#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
          <a href="/#roadmap" onClick={(e) => handleLinkClick(e, '#roadmap')}>Roadmap</a>
          <a href="/#roi-calculator" onClick={(e) => handleLinkClick(e, '#roi-calculator')}>ROI</a>
          <a href="/#contact" className="cta-button-small" onClick={(e) => handleLinkClick(e, '#contact')}>
            Get Started
          </a>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
