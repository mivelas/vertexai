import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './LogoSophisticated';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-link">
          <Logo size={48} />
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#roadmap" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</a>
          <a href="#contact" className="cta-button-small" onClick={() => setIsMobileMenuOpen(false)}>
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
