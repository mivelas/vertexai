import { ChevronRight, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Vertex AI Systems • Enterprise Intelligence
          </div>
          <h1 className="hero-title">
            Future-Proof Your Business with <span className="gradient-text">Vertex AI</span>
          </h1>
          <p className="hero-subtitle">
            Vertex AI Systems bridges the gap between cutting-edge technology and your corporate goals. 
            We provide the strategic oversight and custom architecture needed to lead in the age of intelligence.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book a Strategy Session <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Expertise <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
