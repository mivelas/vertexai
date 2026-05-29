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
            Nexalist AI • Accessible AI for Growth
          </div>
          <h1 className="hero-title">
            Accessible AI Solutions to <span className="gradient-text">Scale Your Business Faster</span>
          </h1>
          <p className="hero-subtitle">
            We bring enterprise-grade AI efficiency to your growing business. 
            Get actionable, measurable results and actionable strategic insight without the enterprise-level complexity.
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
