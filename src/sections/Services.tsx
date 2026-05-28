import { Compass, GraduationCap, Search, Cpu, CheckCircle2 } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Compass size={40} />,
    title: "AI Strategic Planning",
    description: "We work with your leadership team to craft a 12-36 month AI adoption roadmap tailored to your industry, goals, and culture.",
    features: ["Risk assessment", "ROI projections", "Governance frameworks"]
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Executive & Corporate Training",
    description: "Upskill your workforce with hands-on workshops covering prompt engineering, AI ethics, and tool-specific mastery.",
    features: ["Customized curriculum", "Hands-on labs", "AI literacy audits"]
  },
  {
    icon: <Search size={40} />,
    title: "AI Readiness Audit",
    description: "A deep dive into your data infrastructure, existing workflows, and tech stack to identify high-impact AI opportunities.",
    features: ["Data quality review", "Silo identification", "Vendor evaluation"]
  },
  {
    icon: <Cpu size={40} />,
    title: "Custom Solution Design",
    description: "Architecting bespoke AI systems—from RAG-enhanced LLMs to predictive ML pipelines—that integrate with your legacy tools.",
    features: ["API integration", "Model fine-tuning", "Scalable architecture"]
  }
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">
            Specialized consultancy services designed to take you from AI curiosity to market leadership.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-visual">
                <div className="service-icon-wrapper glass-card">
                  {service.icon}
                </div>
                <div className="service-line"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle2 size={18} className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
