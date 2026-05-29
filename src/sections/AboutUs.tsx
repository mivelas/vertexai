import React from 'react';
import './AboutUs.css';
import { Building2, TrendingUp, Users } from 'lucide-react';

const industries = [
  { name: 'Retail', icon: <Building2 size={24} /> },
  { name: 'Services', icon: <Users size={24} /> },
  { name: 'Fast Food', icon: <TrendingUp size={24} /> },
];

const AboutUs = () => {
  return (
    <section id="about" className="about-us section-padding">
      <div className="container">
        <div className="about-content glass-card">
          <h2 className="section-title">About <span className="gradient-text">Nexalist AI</span></h2>
          <p className="about-description">
            With years of experience implementing enterprise-grade AI solutions, we partner with companies of all sizes to transform their operations. Our approach leverages cutting-edge AI to dramatically increase proficiency, reduce friction, and drive measurable efficiency. We are committed to staying ahead of the rapidly evolving AI landscape, ensuring our clients always benefit from the latest, most effective trends.
          </p>
          <p className="about-description">
            We are called <strong>Nexalist AI</strong> because we believe in the "next" level of analytical excellence—bridging the gap between raw data and actionable strategic insight. Our name embodies our commitment to being the essential catalyst for your organization's future growth.
          </p>
          
          <div className="industry-focus">
            <h3>Our Industry Expertise</h3>
            <div className="industry-grid">
              {industries.map((industry) => (
                <div key={industry.name} className="industry-card">
                  {industry.icon}
                  <span>{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
