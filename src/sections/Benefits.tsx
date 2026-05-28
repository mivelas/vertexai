import { Zap, BarChart3, Users, ShieldCheck, Rocket, Database } from 'lucide-react';
import './Benefits.css';

const benefits = [
  {
    icon: <Zap size={32} />,
    title: "Operational Efficiency",
    description: "Automate repetitive workflows and free your team to focus on high-value strategic initiatives."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Data-Driven Decisions",
    description: "Transform raw data into actionable business intelligence with custom-trained machine learning models."
  },
  {
    icon: <Users size={32} />,
    title: "Customer Experience",
    description: "Deploy 24/7 intelligent agents that provide personalized, context-aware engagement for every customer."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Risk Management",
    description: "Identify potential vulnerabilities and market shifts before they happen with predictive risk analytics."
  },
  {
    icon: <Database size={32} />,
    title: "Knowledge Management",
    description: "Unlock your company's hidden expertise with internal AI that searches and synthesizes documentation instantly."
  },
  {
    icon: <Rocket size={32} />,
    title: "Innovation Speed",
    description: "Accelerate R&D cycles and bring products to market faster with AI-assisted design and development."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="benefits section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Power of <span className="gradient-text">Enterprise AI</span></h2>
          <p className="section-subtitle">
            AI is no longer an option—it's the primary driver of competitive advantage in the modern economy.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
