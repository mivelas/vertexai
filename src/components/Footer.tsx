import Logo from './LogoSophisticated';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo size={36} />
            <p className="footer-tagline">Architecting the future of enterprise intelligence. Expert AI consultancy for high-stakes industries.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Expertise</h4>
              <a href="#benefits">Benefits</a>
              <a href="#services">Services</a>
              <a href="#roadmap">Process</a>
            </div>
            <div className="footer-link-group">
              <h4>Connect</h4>
              <a href="#contact">Contact</a>
              <a href="mailto:hello@nexalist.ai">Email Us</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nexalist AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
