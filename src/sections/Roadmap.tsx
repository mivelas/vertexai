
import './Roadmap.css';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your business model, current technology, and pain points to identify the highest-value AI opportunities."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Creation of a detailed roadmap including tech stack recommendations, ROI projections, and an implementation timeline."
  },
  {
    number: "03",
    title: "Development",
    description: "Our engineers build, fine-tune, and integrate AI solutions into your existing workflows with minimal disruption."
  },
  {
    number: "04",
    title: "Training",
    description: "We empower your team with the skills and confidence to use the new AI tools effectively through custom workshops."
  },
  {
    number: "05",
    title: "Scale",
    description: "Ongoing support and optimization to ensure your AI ecosystem evolves with the rapidly changing technological landscape."
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The AI <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">
            A structured, low-risk approach to integrating AI into your corporate DNA.
          </p>
        </div>

        <div className="roadmap-container">
          {steps.map((step, index) => (
            <div key={index} className="roadmap-step">
              <div className="roadmap-number">{step.number}</div>
              <div className="roadmap-card glass-card">
                <h3 className="roadmap-title">{step.title}</h3>
                <p className="roadmap-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="roadmap-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
