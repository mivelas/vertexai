import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="glass-card success-card">
            <CheckCircle size={64} className="success-icon" />
            <h2>Strategy Session Booked!</h2>
            <p>Thank you for reaching out to Vertex AI Systems. We'll be in touch within 24 hours to schedule your discovery call.</p>
            <button onClick={() => setFormState('idle')} className="btn btn-primary">Send Another Message</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title">Ready to <span className="gradient-text">Evolve?</span></h2>
          <p className="contact-text">
            Schedule a confidential discovery call with the Vertex team to discuss your business goals and AI roadmap.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">hello@vertexai.systems</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Inquiries</span>
              <span className="detail-value">San Francisco • London • Remote</span>
            </div>
          </div>
        </div>

        <div className="glass-card contact-form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" required placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" required>
                <option value="">Select a service...</option>
                <option value="strategy">AI Strategic Planning</option>
                <option value="training">Corporate Training</option>
                <option value="audit">Readiness Audit</option>
                <option value="solution">Custom Solution Design</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea id="message" rows={4} placeholder="Tell us about your organization's AI objectives..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={formState === 'submitting'}>
              {formState === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
