import { Compass, GraduationCap, Search, Cpu, CheckCircle2 } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Compass size={40} />,
    title: "AI Growth Roadmap",
    description: "We work with you to craft a clear, actionable AI adoption plan tailored to your business goals and immediate operational needs.",
    features: ["Quick-win identification", "Measurable ROI", "Growth-focused planning"]
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Team AI Training",
    description: "Upskill your workforce with hands-on, practical workshops covering prompt engineering and AI tools to save time daily.",
    features: ["Practical skill-building", "Time-saving workshops", "AI literacy basics"]
  },
  {
    icon: <Search size={40} />,
    title: "Quick-Start AI Efficiency Check",
    description: "A focused assessment of your current workflows to identify the highest-impact area for immediate AI automation.",
    features: ["Workflow optimization", "Automation potential", "Integration readiness"]
  },
  {
    icon: <Cpu size={40} />,
    title: "Lightweight Solution Design",
    description: "Architecting bespoke AI systems that integrate seamlessly with your existing tools, ensuring minimal disruption.",
    features: ["Seamless integration", "Existing stack compatibility", "Scalable design"]
  }
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">
            Accessible AI consultancy services designed to scale your business quickly and efficiently.
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
